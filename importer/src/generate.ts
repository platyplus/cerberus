import _ from 'lodash'
import { readFile, utils } from 'xlsx'
import fs from 'fs'
import rimraf from 'rimraf'
import { mergeArray, entityName, writeFilePromise, getType } from './helpers'
import { Row, Mapping } from './excel-metadata'
const log = console.log.bind(console, `[${new Date().toLocaleString()}]`)

// Constants
const METADATA_FILE = 'metadata.xlsx'
const DEST_FOLDER = './src/entity'
// Classes
class Property {
  parent: Entity
  name: string
  type: string = 'string'
  isOneToMany?: boolean
  isManyToOne?: boolean
  isPk?: boolean
  relation?: Property
  constructor(parent: Entity, name: string) {
    this.parent = parent
    this.name = _.camelCase(name)
  }
  annotations(): string {
    let annotation = ''
    let params = ''
    if (this.relation) {
      annotation = this.isManyToOne ? 'ManyToOne' : 'OneToMany'
      params = `type => ${this.type}, ${_.lowerFirst(
        this.type
      )} => ${_.lowerFirst(this.type)}.${this.relation.name}, `
    } else {
      annotation = this.isPk ? 'PrimaryColumn' : 'Column'
    }
    let other = ''
    if (this.isManyToOne) {
      if (this.relation) {
        const fks = this.relation.parent
          .pkProperties()
          .map(
            prop =>
              `{ name: '${prop.strName()}', referencedColumnName: '${prop.strName()}'}`
          )
        other += `\n\t@JoinColumn([${fks.join(', ')}])`
      }
    }
    return `\t@${annotation}(${params}${this.strColumnOptions()})${other}`
  }
  strColumnOptions(): string {
    let options = []
    if (this.isOneToMany) {
      options.push('cascade: true')
    } else if (this.isManyToOne) {
      options.push('eager: true')
    } else {
      if (!this.isPk) options.push('nullable: true')
      options.push(`name: '${_.snakeCase(this.name)}'`)
    }
    if (this.type === 'number') options.push("type: 'integer'")
    else if (this.type === 'Date') options.push("type: 'timestamptz'")
    else if (this.type === 'boolean') options.push("type: 'boolean'")
    return `{
    ${options.join(',\n\t\t')}
  }`
  }
  dependencies = () =>
    this.relation
      ? {
          [`./${this.type}`]: [this.type],
          typeorm: this.isManyToOne
            ? ['ManyToOne', 'JoinColumn']
            : ['OneToMany']
        }
      : { typeorm: [this.isPk ? 'PrimaryColumn' : 'Column'] }

  strType = () => (this.isOneToMany ? `${this.type}[]` : this.type)

  strName = () => (this.name.match(/^\d/) ? `'${this.name}'` : this.name)

  strDeclaration = () => this.strName() + ': ' + this.strType()

  render = () => `${this.annotations()}\n\t${this.strDeclaration()}\n\n`
}

class Entity {
  name: string
  properties: Property[] = []
  constructor(name: string) {
    this.name = entityName(name)
  }
  dependencies = () => ({
    typeorm: _.isEmpty(this.pkProperties())
      ? ['Entity', 'PrimaryGeneratedColumn']
      : ['Entity', 'PrimaryColumn']
  })
  findOrCreateProperty(
    rawName: string,
    type: string,
    constraint?: string
  ): Property {
    const name = _.camelCase(rawName)
    let property = this.properties.find(curs => curs.name === name)
    if (!property) {
      property = new Property(this, name)
      this.properties.push(property)
    }
    property.type = type
    if (constraint && constraint === 'pk') property.isPk = true
    return property
  }
  pushOneToManyProperty(row: Row, relation: Entity): Property {
    const relationName = `${_.camelCase(row.relation)}s`
    const relationType = entityName(row.relation)
    let oneToManyProperty = this.findOrCreateProperty(
      relationName,
      relationType,
      row.constraint
    )

    oneToManyProperty.isOneToMany = true
    const name = _.camelCase(row.form)
    const type = entityName(row.form)
    let manyToOneProperty = relation.findOrCreateProperty(
      name,
      type,
      row.constraint
    )
    manyToOneProperty.isManyToOne = true

    oneToManyProperty.relation = manyToOneProperty
    manyToOneProperty.relation = oneToManyProperty
    return oneToManyProperty
  }
  pkProperties = () => this.properties.filter(property => property.isPk)

  render(): string {
    let dependencies = this.dependencies()
    for (let prop of this.properties)
      dependencies = _.mergeWith(dependencies, prop.dependencies(), mergeArray)
    const strDependencies = Object.keys(dependencies)
      .map(k => `import { ${(<any>dependencies)[k].join(', ')} } from '${k}'`)
      .join('\n')
    const strPk = _.isEmpty(this.pkProperties())
      ? "\t@PrimaryGeneratedColumn('uuid')\n\tid: string\n\n"
      : ''
    const strProps = this.properties.map(p => p.render()).join('')

    return `// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
${strDependencies}\n
@Entity()
export class ${this.name} {\n${strPk}${strProps}}\n`
  }
}

class EntityManager {
  entities: Entity[] = new Array<Entity>()
  mapping: Mapping[] = []
  findOrCreate(rawName: string): Entity {
    let entity = this.entities.find(curs => curs.name === entityName(rawName))
    if (!entity) {
      entity = new Entity(rawName)
      this.entities.push(entity)
    }
    return entity
  }
  pushRow(row: Row): Entity {
    let entity = this.findOrCreate(row.form)
    let entityMapping: Mapping | undefined = this.mapping.find(
      curs => curs.file === row.form
    )
    if (!entityMapping) {
      entityMapping = {
        file: row.form,
        entity: entity.name,
        columns: []
      }
      this.mapping.push(entityMapping)
    }
    let propertyMapping = entityMapping.columns.find(
      curs => curs.column === row.excel_name
    )
    const type = getType(row)
    if (!propertyMapping) {
      propertyMapping = {
        column: row.excel_name,
        property: '',
        type
      }
      entityMapping.columns.push(propertyMapping)
    }
    const propertyName = (row.property_name || row.excel_name).replace(
      /\d+$/,
      ''
    )
    if (row.relation) {
      let relationEntity = this.findOrCreate(row.relation)
      let relationProperty = relationEntity.findOrCreateProperty(
        propertyName,
        type,
        row.constraint
      )
      let property = entity.pushOneToManyProperty(row, relationEntity)
      propertyMapping.relation = property.name
      propertyMapping.property = relationProperty.name
    } else {
      let property = entity.findOrCreateProperty(
        propertyName,
        type,
        row.constraint
      )
      propertyMapping.property = property.name
    }
    return entity
  }
  import(fileName: string): void {
    log(`Generating from ${fileName}...`)
    const workbook = readFile(fileName)
    const ws = workbook.Sheets[workbook.SheetNames[0]]
    var jsMetadata = <Array<Row>>utils.sheet_to_json(ws)
    for (let row of jsMetadata) {
      this.pushRow(row)
    }
  }
  renderIndex(): string {
    const imports = this.entities.map(
      entity => `import { ${entity.name} } from './${entity.name}'`
    )
    const classes = this.entities.map(
      entity => `'${entity.name}': ${entity.name}`
    )
    return `${imports.join('\n')}\n
export const classes: { [key: string]: any } = {
  ${classes.join(',\n\t')}
}`
  }
  async export() {
    rimraf.sync(DEST_FOLDER)
    fs.mkdir(DEST_FOLDER, { recursive: true }, err => {})
    for (let entity of this.entities)
      await writeFilePromise(
        `${DEST_FOLDER}/${entity.name}.ts`,
        entity.render()
      )
    await writeFilePromise(
      `${DEST_FOLDER}/mapping.json`,
      JSON.stringify(this.mapping, null, 2)
    )
    await writeFilePromise(`${DEST_FOLDER}/index.ts`, this.renderIndex())
    log('Done')
  }
}

// Execution
let entityManager = new EntityManager()
entityManager.import(METADATA_FILE)
entityManager.export()
