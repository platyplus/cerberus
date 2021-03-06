import 'reflect-metadata'
import chokidar from 'chokidar'
import { createConnection, Connection } from 'typeorm'
import { resolve } from 'path'
import path from 'path'
import fs from 'fs'
import { spawnSync, SpawnSyncReturns } from 'child_process'
import _ from 'lodash'
import csv from 'csvtojson'
const mapping: Mapping[] = require('./entity/mapping.json')
import { classes } from './entity'
import { Mapping } from './excel-metadata.js'

const DATA_PATH = resolve(process.env.DATA_PATH || '/data')
const TMP_PATH = resolve(process.env.TMP_PATH || '/tmp/cerberus')
const log = console.log.bind(console, `[${new Date().toLocaleString()}]`)

fs.mkdir(TMP_PATH, { recursive: true }, err => {})

const convertRow: any = (entityMapping: Mapping, row: any) => {
  return entityMapping.columns.reduce(
    (prev, curr) => {
      let value = row[curr.column]
      if (value) {
        if (curr.type === 'Date') value = new Date(value) || value
        else if (curr.type === 'number') value = parseInt(value) || undefined
        else if (curr.type === 'boolean') value = value === 'True'
        if (curr.relation) {
          // TODO: veeery tricky, probably incorrect
          if (!prev[curr.relation]) prev[curr.relation] = []
          let el = prev[curr.relation].find(
            (e: { [key: string]: any }) => e[curr.property] === undefined
          )
          if (el) {
            // Arrays: add value to the existing one
            if (curr.array && el[curr.property])
              value = el[curr.property]
                ? [...el[curr.property], ...value]
                : [value]

            el[curr.property] = value
            el = { ...el, ...curr.entityValues }
          } else
            prev[curr.relation].push({
              [curr.property]: value,
              ...curr.entityValues
            })
        } else {
          // Arrays: add value to the existing one
          if (curr.array && prev[curr.property])
            value = prev[curr.property]
              ? [...prev[curr.property], ...value]
              : [value]
          prev[curr.property] = value
        }
      }
      return prev
    },
    {} as { [key: string]: any }
  )
}

function loadFile(file: string, connection: Connection) {
  if (path.extname(file) !== '.xlsx') return
  const manager = connection.manager
  const shortFileName = path.basename(file, path.extname(file))
  const entityMapping = mapping.find(entity => entity.file === shortFileName)
  if (entityMapping) {
    const csvFileName = `${TMP_PATH}/${shortFileName}.csv`
    log(`Converting ${shortFileName} to ${csvFileName}...`)
    let child: SpawnSyncReturns<any> = spawnSync('ssconvert', [
      file,
      csvFileName
    ])
    if (child.status) {
      log(`Error in streaming ${csvFileName}:`)
      log(child.stderr.toString('utf8'))
    }

    log(`Finished to create ${csvFileName}. Importing...`)
    const readStream = fs.createReadStream(csvFileName)
    let entityClass = classes[entityMapping.entity]
    // Parses and concatenates each of the array columns with the same name
    const colParser = entityMapping.columns
      .filter(col => col.array)
      .reduce(
        (prev, curr) => {
          prev[curr.column] = (
            item: string,
            head: string | number,
            resultRow: { [x: string]: string },
            row: any,
            colIdx: any
          ) => (resultRow[head] ? [...resultRow[head], item] : [item])
          return prev
        },
        {} as { [key: string]: any }
      )
    csv({
      checkType: true,
      ignoreEmpty: true,
      flatKeys: true,
      trim: true,
      colParser
    })
      .fromStream(readStream)
      .subscribe((json: any) => {
        return new Promise((resolve, reject) => {
          const data = convertRow(entityMapping, json)
          let entity = manager.create(entityClass, data)
          manager
            .save(entity)
            .then(res => {
              resolve()
            })
            .catch(err => {
              log(err)
              reject()
            })
        })
      })
  }
}

createConnection()
  .then(async connection => {
    const watcher = chokidar.watch(DATA_PATH, {
      ignored: /(^|[\/\\])[\.\~]./,
      persistent: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      }
    })
    watcher
      .on('add', path => loadFile(path, connection))
      .on('change', path => loadFile(path, connection))
    log('Application is up and running')
  })
  .catch(error => log(error))
