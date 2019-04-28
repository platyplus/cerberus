import _ from 'lodash'

export const mergeArray = (objValue: any, srcValue: any): any => {
  if (_.isArray(objValue)) {
    return _.union(objValue, srcValue)
  }
}

export const propertyName = (rawName: string): string => {
  let result = _.camelCase(rawName)
  return result
}

export const entityName = (rawName: string): string => {
  let result = _.upperFirst(_.camelCase(rawName))
  if (result.match(/^\d/)) result = '_' + result
  return result
}
