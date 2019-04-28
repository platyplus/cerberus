import _ from 'lodash'
import { readFile, utils } from 'xlsx'
import fs from 'fs'
import rimraf from 'rimraf'
import { mergeArray, propertyName, entityName } from './helpers'
/** TODO: Works, but still some to be done:
 * - TbKeySample is not mapped correctly (different way to name repeated fields)
 * - unique columns in the schema such as mdmCode...
 */

// Log helper
const log = console.log.bind(console)

// Constants
const METADATA_FILE = 'metadata.xlsx'
const DEST_FOLDER = './src/entity'
const PROPERTY_MAPPING: { [key: string]: string } = {
  Numeric: 'number',
  Date: 'date'
}
// Classes
// TODO: split Property to an abstract class + inherited classes e.g. OneToManyProperty etc
class Property {
  parent: Entity
  name: string = ''
  type: string = 'string'
  isOneToMany: boolean = false
  isManyToOne: boolean = false
  isPk: boolean = false
  relation?: Property
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
    return `\t@${annotation}(${params}${this.columnOptions()})${other}`
  }
  constructor(parent: Entity, name: string) {
    this.parent = parent
    this.name = propertyName(name)
  }
  columnOptions(): string {
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
    else if (this.type === 'date') options.push("type: 'timestamptz'")
    return `{
    ${options.join(',\n\t\t')}
  }`
  }
  dependencies(): Object {
    let typeorm = []
    if (this.isPk) typeorm.push('PrimaryColumn')
    if (this.relation) {
      if (this.isManyToOne) typeorm.push('ManyToOne', 'JoinColumn')
      else typeorm.push('OneToMany')
      return {
        [`./${this.type}`]: [this.type],
        typeorm
      }
    } else {
      typeorm.push('Column')
      return { typeorm: ['Column'] }
    }
  }
  strType(): string {
    let type = this.type
    if (this.isOneToMany) type = `${this.type}[]`
    if (this.type === 'date') type = 'Date'
    return type
  }
  strName(): string {
    let name = this.name
    if (this.name.match(/^\d/)) name = `'${this.name}'`
    return name
  }
  strDeclaration(): string {
    // if (this.isManyToOne && this.relation) {
    //   log(this.strName() + ' parent: ' + this.relation.parent.name)
    //   return this.relation.parent
    //     .pkProperties()
    //     .map(prop => `${prop.strName()}: ${prop.strType()}`)
    //     .join('\n\t')
    // } else {
    return this.strName() + ': ' + this.strType()
    // }
  }
  render(): string {
    return `${this.annotations()}\n\t${this.strDeclaration()}\n\n`
  }
}

interface Row {
  form: string
  number: number
  variable: string
  type: string
  label: string
  modalities: string
  entity: string
  constraint: string
}

class Entity {
  name: string
  properties: Property[] = []
  constructor(name: string) {
    this.name = entityName(name)
  }
  dependencies(): Object {
    let typeorm = ['Entity']
    if (_.isEmpty(this.pkProperties())) typeorm.push('PrimaryGeneratedColumn')
    else typeorm.push('PrimaryColumn')
    return { typeorm }
  }
  findOrCreateProperty(
    rawName: string,
    type?: string,
    constraint?: string
  ): Property {
    const name = propertyName(rawName)
    let property = this.properties.find(curs => curs.name === name)
    if (!property) {
      property = new Property(this, name)
      this.properties.push(property)
    }
    if (type) property.type = type
    if (constraint && constraint === 'pk') property.isPk = true
    return property
  }
  pushOneToManyProperty(row: Row, relation: Entity): Property {
    const relationName = `${propertyName(row.entity)}s`
    const relationType = entityName(row.entity)
    let oneToManyProperty = this.findOrCreateProperty(
      relationName,
      relationType,
      row.constraint
    )

    oneToManyProperty.isOneToMany = true
    const name = propertyName(row.form)
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
  pkProperties(): Property[] {
    return this.properties.filter(property => property.isPk)
  }
  render(): string {
    let dependencies = this.dependencies()
    const strProps = this.properties.reduce((prev, curr) => {
      dependencies = _.mergeWith(dependencies, curr.dependencies(), mergeArray)
      return prev + curr.render()
    }, '')
    const strDependencies = Object.keys(dependencies).reduce(
      (prev, curr) =>
        prev +
        `import { ${(<any>dependencies)[curr].join(', ')} } from '${curr}'\n`,
      ''
    )
    const strPk = _.isEmpty(this.pkProperties())
      ? "\t@PrimaryGeneratedColumn('uuid')\n\tid: string\n\n"
      : ''
    return `// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
${strDependencies}
@Entity()
export class ${this.name} {\n${strPk}${strProps}}\n`
  }
}

interface ColumnMapping {
  column: string
  relation?: string
  property: string
  type: string
}
export interface Mapping {
  file: string
  entity: string
  columns: ColumnMapping[]
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
    let columnName = `${row.number}. ${row.variable}`
    let propertyMapping = entityMapping.columns.find(
      curs => curs.column === columnName
    )
    const type = PROPERTY_MAPPING[row.type] || 'string'
    if (!propertyMapping) {
      propertyMapping = {
        column: columnName,
        property: '',
        type
      }
      entityMapping.columns.push(propertyMapping)
    }
    if (row.entity) {
      let relationEntity = this.findOrCreate(row.entity)
      let relationProperty = relationEntity.findOrCreateProperty(
        row.variable.replace(/\d+$/, ''),
        type,
        row.constraint
      )
      let property = entity.pushOneToManyProperty(row, relationEntity)
      propertyMapping.relation = property.name
      propertyMapping.property = relationProperty.name
    } else {
      let property = entity.findOrCreateProperty(
        row.variable,
        type,
        row.constraint
      )
      propertyMapping.property = property.name
    }
    return entity
  }
  import(fileName: string): void {
    log(`Importing from ${fileName}...`)
    const workbook = readFile(fileName)
    const ws = workbook.Sheets[workbook.SheetNames[0]]
    var jsMetadata = <Array<Row>>utils.sheet_to_json(ws)
    for (let row of jsMetadata) {
      this.pushRow(row)
    }
    log('Done')
  }
  renderIndex(): string {
    const imports = this.entities.map(
      entity => `import { ${entity.name} } from './${entity.name}'`
    )
    const classes = this.entities.map(
      entity => `'${entity.name}': ${entity.name}`
    )
    return `${imports.join('\n')}
    
export const classes: { [key: string]: any } = {
  ${classes.join(',\n\t')}
}`
  }
  export(): void {
    log(`Exporting to ${DEST_FOLDER}...`)
    rimraf.sync(DEST_FOLDER)
    fs.mkdir(DEST_FOLDER, { recursive: true }, err => {})
    for (let entity of this.entities) {
      fs.writeFile(`${DEST_FOLDER}/${entity.name}.ts`, entity.render(), err => {
        if (err) {
          console.error(err)
          return
        }
        log(`${entity.name}: done.`)
      })
    }
    fs.writeFile(
      `${DEST_FOLDER}/mapping.json`,
      JSON.stringify(this.mapping, null, 2),
      err => {
        if (err) {
          console.error(err)
          return
        }
        log('Mapping exported.')
      }
    )
    fs.writeFile(`${DEST_FOLDER}/index.ts`, this.renderIndex(), err => {
      if (err) {
        console.error(err)
        return
      }
      log('Index created.')
    })
    log('Done')
  }
}

// Execution
let entityManager = new EntityManager()
entityManager.import(METADATA_FILE)
entityManager.export()
