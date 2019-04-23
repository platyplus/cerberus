import _ from 'lodash'
import { readFile, utils } from 'xlsx'
import fs from 'fs'
import rimraf from 'rimraf'
/** TODO: Works, but still some to be done:
 * - TbKeySample is not mapped correctly (different way to name repeated fields)
 * - column types: string, dates, numbers...
 */

// Log helper
const log = console.log.bind(console)

// Helpers
const mergeArray = (objValue: any, srcValue: any) => {
  if (_.isArray(objValue)) {
    return _.union(objValue, srcValue)
  }
}

// Constants
const METADATA_FILE = 'metadata.xlsx'
const DEST_FOLDER = './src/schema'

// Classes
enum PropertyType {
  String = 'string',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

class Property {
  name: string = ''
  type: string = 'string'
  isOneToMany: boolean = false
  isManyToOne: boolean = false
  relation?: Property
  annotations(): string {
    if (this.relation) {
      const annotation = this.isManyToOne ? 'ManyToOne' : 'OneToMany'
      return `@${annotation}(type => ${this.type}, ${_.lowerFirst(
        this.type
      )} => ${_.lowerFirst(this.type)}.${this.relation.name})`
    }
    return `@Column(${this.columnType()})`
  }
  constructor(name: string) {
    this.name = _.camelCase(name)
  }
  columnType(): string {
    return '' // TODO: numbers, strings, dates...
  }
  dependencies(): Object {
    let dependencies: { [k: string]: any } = { typeorm: ['Column'] }
    if (this.relation) {
      dependencies[`./${this.type}`] = [this.type]
    }
    return dependencies
  }
  strType(): string {
    if (this.isOneToMany) return `${this.type}[]`
    return this.type
  }
  render(): string {
    return `
  ${this.annotations()}
  ${this.name}: ${this.strType()}
`
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
}

class Entity {
  name: string
  properties: Property[] = []
  constructor(name: string) {
    this.name = _.upperFirst(_.camelCase(name))
  }
  dependencies(): Object {
    return { typeorm: ['Entity'] }
  }
  findOrCreateProperty(rawName: string, type?: string): Property {
    const name = _.camelCase(rawName)
    let property = this.properties.find(curs => curs.name === name)
    if (!property) {
      property = new Property(name)
      this.properties.push(property)
    }
    if (type) property.type = type
    return property
  }
  pushOneToManyProperty(row: Row, relation: Entity): void {
    const relationName = `${_.camelCase(row.entity)}s`
    const relationType = _.upperFirst(_.camelCase(row.entity))
    let oneToManyProperty = this.findOrCreateProperty(
      relationName,
      relationType
    )

    oneToManyProperty.isOneToMany = true
    const name = _.camelCase(row.form)
    const type = _.upperFirst(name)
    let manyToOneProperty = relation.findOrCreateProperty(name, type)
    manyToOneProperty.isManyToOne = true

    oneToManyProperty.relation = manyToOneProperty
    manyToOneProperty.relation = oneToManyProperty
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
    return `// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
${strDependencies}
@Entity()
export class ${this.name} {
  @PrimaryGeneratedColumn('uuid')
  id: string
  ${strProps}
}
`
  }
}

class EntityManager {
  entities: Entity[] = new Array<Entity>()
  findOrCreate(rawName: string): Entity {
    let entity = this.entities.find(
      curs => curs.name === _.upperFirst(_.camelCase(rawName))
    )
    if (!entity) {
      entity = new Entity(rawName)
      this.entities.push(entity)
    }
    return entity
  }
  pushRow(row: Row): Entity {
    let entity = this.findOrCreate(row.form)
    if (row.entity) {
      let relationEntity = this.findOrCreate(row.entity)
      relationEntity.findOrCreateProperty(row.variable.replace(/\d+$/, ''))
      entity.pushOneToManyProperty(row, relationEntity)
    } else {
      entity.findOrCreateProperty(row.variable)
    }
    return entity
  }
  import(fileName: string): void {
    const workbook = readFile(fileName)
    const ws = workbook.Sheets[workbook.SheetNames[0]]
    var jsMetadata = <Array<Row>>utils.sheet_to_json(ws)
    for (let row of jsMetadata) {
      this.pushRow(row)
    }
  }
  export(): void {
    rimraf.sync(DEST_FOLDER)
    fs.mkdir(DEST_FOLDER, { recursive: true }, err => {})
    for (let entity of this.entities) {
      fs.writeFile(`${DEST_FOLDER}/${entity.name}.ts`, entity.render(), err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`${entity.name}: done`)
      })
    }
  }
}

// Execution
let entityManager = new EntityManager()
entityManager.import(METADATA_FILE)
entityManager.export()
