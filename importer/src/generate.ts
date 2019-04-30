import _ from 'lodash'
import { readFile, utils } from 'xlsx'
import fs from 'fs'
import rimraf from 'rimraf'
import {
  mergeArray,
  entityName,
  writeFilePromise,
  getType,
  getName,
  relationName
} from './helpers'
import { Row, Mapping } from './excel-metadata'
const log = console.log.bind(console, `[${new Date().toLocaleString()}]`)

// Constants
const METADATA_FILE = 'metadata.xlsx'
const DEST_FOLDER = './src/entity'

// Classes
abstract class Property {
  parent: Entity
  name: string
  type: string
  isPk: boolean
  constructor(row: Row, parent: Entity) {
    this.parent = parent
    this.name = getName(row)
    this.type = getType(row)
    this.isPk = row.constraint === 'pk'
    parent.properties.push(this)
  }
  abstract dependencies(): { [key: string]: string[] }
  abstract decorators(): string
  abstract columnOptions(): string[]
  strType() {
    return this.type
  }
  strColumnOptions() {
    return `{\n\t\t${this.columnOptions().join(',\n\t\t')}\n\t}`
  }

  strName() {
    return this.name.match(/^\d/) ? `'${this.name}'` : this.name
  }
  render = () =>
    `${this.decorators()}\n\t${this.strName() + ': ' + this.strType()}\n\n`
}

class SimpleProperty extends Property {
  columnName: string
  constructor(row: Row, parent: Entity) {
    super(row, parent)
    this.columnName = row.excel_name
  }
  dependencies() {
    return { typeorm: [this.isPk ? 'PrimaryColumn' : 'Column'] }
  }
  decorators() {
    return `\t@${
      this.isPk ? 'PrimaryColumn' : 'Column'
    }(${this.strColumnOptions()})`
  }

  columnOptions() {
    const optionTypes = {
      number: 'integer',
      Date: 'timestamptz',
      boolean: 'boolean'
    } as { [key: string]: string }
    let options = [`name: '${_.snakeCase(this.name)}'`]
    optionTypes[this.type] && options.push(`type: '${optionTypes[this.type]}'`)
    !this.isPk && options.push('nullable: true')
    return options
  }
}

abstract class RelationProperty extends Property {
  relation: RelationProperty
  constructor(row: Row, parent: Entity, relation?: RelationProperty) {
    super(row, parent)
    if (relation) this.relation = relation
  }
  dependencies() {
    return {
      [`./${this.type}`]: [this.type]
    }
  }
  strColumnOptions() {
    return `type => ${this.type}, ${_.lowerFirst(this.type)} => ${_.lowerFirst(
      this.type
    )}.${this.relation.strName()}, ${super.strColumnOptions()}`
  }
}

class OneToManyProperty extends RelationProperty {
  constructor(row: Row, parent: Entity, relationEntity: Entity) {
    super(row, parent)
    this.name = _.camelCase(row.relation)
    this.type = entityName(row.relation)
    this.relation =
      <RelationProperty>relationEntity.findProperty(row.relation) ||
      new ManyToOneProperty(row, relationEntity, this)
  }
  dependencies() {
    return {
      ...super.dependencies(),
      typeorm: ['OneToMany']
    }
  }
  strType() {
    return super.strType() + '[]'
  }
  strName() {
    return super.strName() + 's'
  }
  columnOptions() {
    return ['cascade: true']
  }
  decorators() {
    return `\t@OneToMany(${this.strColumnOptions()})`
  }
}
class ManyToOneProperty extends RelationProperty {
  constructor(row: Row, parent: Entity, relation: OneToManyProperty) {
    super(row, parent, relation)
    this.name = _.camelCase(row.form)
    this.type = _.upperFirst(_.camelCase(row.form))
  }
  dependencies() {
    return {
      ...super.dependencies(),
      typeorm: ['ManyToOne', 'JoinColumn']
    }
  }
  columnOptions() {
    return ['eager: true']
  }
  decorators() {
    const fks = this.relation.parent
      .pkProperties()
      .map(
        p => `{ name: '${p.strName()}', referencedColumnName: '${p.strName()}'}`
      )
      .join(', ')
    return `\t@ManyToOne(${this.strColumnOptions()})\n\t@JoinColumn([${fks}])`
  }
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

  findProperty = (prop: string) =>
    this.properties.find(p => p.name === _.camelCase(prop).replace(/\d+$/, ''))

  push = (row: Row, repository: EntityManager) => {
    if (row.relation) {
      let relationEntity = repository.findOrCreate(row.relation)
      if (!this.findProperty(row.relation))
        return new OneToManyProperty(row, this, relationEntity)
      if (!relationEntity.findProperty(row.property_name))
        return new SimpleProperty(row, relationEntity)
    } else if (!this.findProperty(row.property_name))
      return new SimpleProperty(row, this)
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

  pushRow(row: Row): void {
    let entity = this.findOrCreate(row.form)
    entity.push(row, this)
    let entityMapping = this.mapping.find(m => m.entity === entity.name)
    if (!entityMapping) {
      entityMapping = {
        file: row.form,
        entity: entity.name,
        columns: []
      }
      this.mapping.push(entityMapping)
    }
    if (!entityMapping.columns.find(c => c.column === row.excel_name)) {
      entityMapping.columns.push({
        column: row.excel_name,
        relation: row.relation && relationName(row.relation) + 's',
        property: getName(row),
        type: getType(row)
      })
    }
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
