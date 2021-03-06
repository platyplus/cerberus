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
import { Row, Mapping, emptyRow, ColumnMapping } from './excel-metadata'
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
  default: string
  constructor(row: Row, parent: Entity) {
    this.parent = parent
    this.name = getName(row)
    this.type = getType(row)
    this.isPk = _.split(row.constraint, ';').includes('pk')
    if (row.default) this.default = row.default
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
      boolean: 'boolean',
      string: 'text'
    } as { [key: string]: string }
    let options = [`name: '${_.snakeCase(this.name)}'`]
    optionTypes[this.type] && options.push(`type: '${optionTypes[this.type]}'`)
    !this.isPk && options.push('nullable: true')
    this.default && options.push(`default: '${this.default}'`)
    return options
  }
}

class MultiplePropery extends SimpleProperty {
  strType() {
    return super.strType() + '[]'
  }
  columnOptions() {
    return [...super.columnOptions(), 'array: true']
  }
}
class EnumProperty extends SimpleProperty {
  defaultValue?: string
  options: string[]
  constructor(
    row: Row,
    parent: Entity,
    options: string[] = [],
    defaultValue?: string
  ) {
    super(row, parent)
    this.columnName = row.excel_name
    this.type = `${_.upperFirst(this.name)}Enum`
    this.options = options
    this.defaultValue = defaultValue
  }
  columnOptions(): string[] {
    let colOptions = [...super.columnOptions(), `enum: ${this.type}`]
    if (this.defaultValue)
      colOptions.push(`default: '${_.replace(this.defaultValue, "'", "\\'")}'`)
    return colOptions
  }
  addOption(option: string) {
    if (!_.isEmpty(option) && !this.options.includes(option))
      this.options.push(option)
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
    this.name = _.camelCase(row.relation_name || row.relation_type)
    this.type = entityName(row.relation_type)
    this.relation =
      <RelationProperty>(
        relationEntity.findProperty(row.relation_name || row.relation_type)
      ) || new ManyToOneProperty(row, relationEntity, this)
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
    this.name = _.camelCase(
      row.form + (row.relation_name ? `_${row.relation_name}` : '') // adds _relation_name suffix to the many2one property in case it already exists
    )
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
        p =>
          `{ name: '${_.snakeCase(this.strName())}_${_.snakeCase(
            p.strName()
          )}', referencedColumnName: '${p.strName()}'}`
      )
      .join(', ')
    return `\t@ManyToOne(${this.strColumnOptions()})\n\t@JoinColumn([${fks}])`
  }
}

const getGroups = (row: Row) => {
  if (row.group_names && row.group_values)
    return _.zipObject(
      _.split(row.group_names, ';').map(s => _.trim(s)),
      _.split(row.group_values, ';').map(s => _.trim(s))
    )
}

const createGroupRelations = (entity: Entity, row: Row) => {
  let groups = getGroups(row)
  if (groups) {
    let r = emptyRow()
    for (let key of Object.keys(groups)) {
      let enumProperty = <EnumProperty>entity.findProperty(relationName(key))
      if (!enumProperty) {
        r.form = row.form
        r.property_name = relationName(key)
        r.property_type = entityName(key)
        enumProperty = new EnumProperty(r, entity)
      }
      if (enumProperty.addOption) enumProperty.addOption(groups[key])
    }
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
    // TODO: OneToOne
    if (row.relation_type && row.relation_multiplicity === 'many') {
      let relationEntity = repository.findOrCreate(row.relation_type)
      createGroupRelations(relationEntity, row)
      if (!this.findProperty(row.relation_name || row.relation_type))
        new OneToManyProperty(row, this, relationEntity)
      if (!relationEntity.findProperty(row.property_name))
        new SimpleProperty(row, relationEntity)
    } else {
      createGroupRelations(this, row)
      if (!this.findProperty(row.property_name))
        if (row.property_multiplicity === 'many') new MultiplePropery(row, this)
        else new SimpleProperty(row, this)
    }
  }

  pkProperties = () => this.properties.filter(p => p.isPk)

  render(): string {
    let result =
      '// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST\n'
    let dependencies = this.dependencies()
    for (let prop of this.properties)
      dependencies = _.mergeWith(dependencies, prop.dependencies(), mergeArray)
    result +=
      Object.keys(dependencies)
        .map(k => `import { ${(<any>dependencies)[k].join(', ')} } from '${k}'`)
        .join('\n') + '\n\n'
    const enumProperties = <EnumProperty[]>(
      this.properties.filter(p => p instanceof EnumProperty)
    )
    let strEnumClasses = enumProperties
      .map(p => {
        const options = p.options
          .map(o => `\n\t${_.snakeCase(o).toUpperCase()} = '${o}'`)
          .join(', ')
        return `export enum ${p.type} { ${options} \n}`
      })
      .join('\n\n')
    if (strEnumClasses) result += strEnumClasses + '\n\n'
    result += '@Entity()\n'
    const strPk = _.isEmpty(this.pkProperties())
      ? "\t@PrimaryGeneratedColumn('uuid')\n\tid: string\n\n"
      : ''
    const strProps = this.properties.map(p => p.render()).join('')
    result += `export class ${this.name} {\n${strPk}${strProps}}\n`
    return result
  }
}

class EntityManager {
  entities: Entity[] = []
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
    if (
      row.import === 'no' ||
      _.isEmpty(row.property_type) ||
      _.isEmpty(row.property_name)
    )
      return
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
      let column: ColumnMapping = {
        column: row.excel_name,
        relation:
          row.relation_type &&
          relationName(row.relation_name || row.relation_type) + 's',
        property: getName(row),
        type: getType(row)
      }
      const entityValues = getGroups(row)
      if (row.property_multiplicity === 'many') column.array = true
      if (!_.isEmpty(entityValues)) column.entityValues = entityValues
      entityMapping.columns.push(column)
    }
  }

  import(fileName: string): void {
    log(`Generating from ${fileName}...`)
    const workbook = readFile(fileName)
    const ws = workbook.Sheets[workbook.SheetNames[0]]
    var jsMetadata = <Row[]>utils.sheet_to_json(ws)
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
