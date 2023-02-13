import { isArray } from '.'

/**
 * @category Object
 *
 * 深度拷贝对象
 */
export function clone(obj: object): object {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @category Object
 *
 * 清除对象中 undefined,null,[]空数组
 */
export function clearNull(obj: any): any {
  if (typeof obj === 'object') {
    const result = clone(obj)

    for (const key in result) {
      const current = result[key]
      if ([null, ''].includes(current) || (isArray(current) && current.length === 0))
        delete result[key]
      else result[key] = clearNull(current)
    }
    return result
  }

  if (isArray(obj))
    return obj.map((item: any) => clearNull(item))

  return obj
}

/**
 * @category Object
 *
 * 是否为对象的属性
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (val: object, key: string | symbol): key is keyof typeof val => hasOwnProperty.call(val, key)

export const objectToString = Object.prototype.toString
/**
 * @category Object
 *
 * 对象类型
 */
export const toTypeString = (value: unknown): string => objectToString.call(value)

/**
 * @category Object
 *
 * 比较一个值是否改变
 */
export const hasChanged = (value: any, oldValue: any): boolean => !Object.is(value, oldValue)
