import _ from 'lodash'
import fs from 'fs'

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
