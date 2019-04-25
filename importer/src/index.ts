import 'reflect-metadata'
import chokidar from 'chokidar'
import { createConnection, Connection } from 'typeorm'
import { resolve } from 'path'
import XLSX from 'xlsx'
import { Readable } from 'stream'
import path from 'path'
import fs from 'fs'

import { Mapping } from './generate'
import mapping from './entity/mapping.json'
import { classes } from './entity'

const DATA_PATH = resolve(process.env.DATA_PATH || '/data')
const TMP_PATH = resolve(process.env.TMP_PATH || '/tmp/cerberus')
const log = console.log.bind(console)

fs.mkdir(TMP_PATH, { recursive: true }, err => {})

const convertRow: any = (entityMapping: Mapping, row: any) => {
  return entityMapping.columns.reduce(
    (prev, curr) => {
      let value = row[curr.column]
      if (value) {
        if (curr.type === 'date') {
          value = new Date((value - (25567 + 1)) * 86400 * 1000)
        } else if (curr.type === 'number') {
          value = parseInt(value)
          if (isNaN(value)) value = undefined
        }
        if (!curr.relation) {
          prev[curr.property] = value
        } else {
          if (!prev[curr.relation]) prev[curr.relation] = []
          let el = prev[curr.relation].find(
            (e: { [key: string]: any }) => e[curr.property] === undefined
          )
          if (el) {
            el[curr.property] = value
          } else {
            prev[curr.relation].push({ [curr.property]: value })
          }
        }
      }
      return prev
    },
    {} as { [key: string]: any }
  )
}

var waitForCount: number = 0
const sleep = (m: number) => new Promise(r => setTimeout(r, m))

const waitFor = async () => {
  while (waitForCount > 0) {
    await sleep(2000)
  }
  waitForCount = 1
}

const resumeWait = () => {
  waitForCount = 0
}

function loadFile(file: string, connection: Connection) {
  const manager = connection.manager
  const shortFileName = path.basename(file, path.extname(file))
  try {
    const entityMapping = mapping.find(entity => entity.file === shortFileName)
    if (entityMapping) {
      log(`${Date.now()} ====== BEGIN ${shortFileName}`)
      const table: XLSX.WorkBook = XLSX.readFile(file)
      log(`${Date.now()} ------ Table is loaded`)
      const sheet: XLSX.Sheet = table.Sheets[table.SheetNames[0]]
      log(`${Date.now()} ------ Sheet is loaded`)
      var jsonFileName = `${TMP_PATH}/${shortFileName}.json`
      var stream = XLSX.stream.to_json(sheet)
      stream.pipe(fs.createWriteStream(jsonFileName))
      //     let stream: Readable = XLSX.stream.to_json(sheet)
      //     log(`${Date.now()} ------ Stream is loaded`)
      //     if (stream) {
      //       stream.on('data', async function(data) {
      //         await waitFor()
      //         const payload = convertRow(entityMapping, data)
      //         let entityClass = classes[entityMapping.entity]
      //         let entity = manager.create(entityClass, payload)
      //         await manager.save(entity)
      //         resumeWait()
      //       })
      // }
    }
  } catch (err) {
    console.error(err)
  }
}

createConnection()
  .then(async connection => {
    const watcher = chokidar.watch(DATA_PATH, {
      ignored: /(^|[\/\\])\../, // TODO: temp excel files, or any non excel file
      persistent: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      }
    })
    watcher //TODO: uncomment
      // .on('add', async path => loadFile(path, connection))
      // .on('change', async path => loadFile(path, connection))
      .on('unlink', async path => log(`File ${path} has been removed`))

    log('Application is up and running')
    const builder = connection.createQueryBuilder()
  })
  .catch(error => log(error))
