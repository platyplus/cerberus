import mapping from './entity/mapping.json'
const log = console.log.bind(console, `[${new Date().toLocaleString()}]`)
let tables: { [key: string]: string[] } = {}

for (let form of mapping) {
  for (let column of form.columns) {
    const entity = column.relation || form.entity
    if (!tables[entity]) tables[entity] = []
    if (!tables[entity].includes(column.property))
      tables[entity].push(column.property)
  }
}
let nbTables = Object.keys(tables).length
let nbColumns = Object.keys(tables).reduce(
  (prev, curr) => (prev += tables[curr].length),
  0
)
log(nbTables)
log(nbColumns)
