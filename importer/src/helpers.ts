import _ from 'lodash'
import fs from 'fs'
import { Row } from './excel-metadata'

const BOOLEAN_MODALITIES = 'Yes ; No'
const PROPERTY_MAPPING: { [key: string]: string } = {
  Numeric: 'number',
  Date: 'Date'
}

export const getType = (row: Row) => {
  if (row.modalities === BOOLEAN_MODALITIES) return 'boolean'
  return PROPERTY_MAPPING[row.type] || 'string'
}

export const mergeArray = (objValue: any, srcValue: any): any => {
  if (_.isArray(objValue)) {
    return _.union(objValue, srcValue)
  }
}

export const entityName = (rawName: string): string => {
  let result = _.upperFirst(_.camelCase(rawName))
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
