import _ from 'lodash'
import fs from 'fs'
import { Row } from './excel-metadata'

const PROPERTY_MAPPING: { [key: string]: string } = {
  string: 'string',
  number: 'number',
  date: 'Date',
  boolean: 'boolean'
}

export const getType = (row: Row) =>
  PROPERTY_MAPPING[row.property_type] || 'string'

export const getName = (row: Row) =>
  _.camelCase(row.property_name).replace(/\d+$/, '')

export const mergeArray = (objValue: any, srcValue: any): any => {
  if (_.isArray(objValue)) {
    return _.union(objValue, srcValue)
  }
}

export const entityName = (rawName: string): string =>
  _.upperFirst(relationName(rawName))

export const relationName = (rawName: string): string => {
  let result = _.camelCase(rawName)
  if (result.match(/^\d/)) result = '_' + result
  return result
}

export const writeFilePromise = (file: string, data: any) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, error => {
      if (error) reject(error)
      resolve('file created successfully with handcrafted Promise!')
    })
  })
}
