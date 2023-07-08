import { toTypeString } from './object'
import type { Fn } from './types'

/**
 * @category Is
 *
 * 是否为数组
 */
export function isArray(obj: any): boolean {
  return Array.isArray(obj)
}

/**
 * @category Is
 *
 */
export const isMap = (val: unknown): val is Map<any, any> => toTypeString(val) === '[object Map]'

/**
 * @category Is
 *
 */
export const isSet = (val: unknown): val is Set<any> => toTypeString(val) === '[object Set]'

/**
 * @category Is
 *
 */
export const isString = (val: unknown): val is string => typeof val === 'string'

/**
 * @category Is
 *
 */
export const isDate = (val: unknown): val is Date => toTypeString(val) === '[object Date]'

/**
 * @category Is
 *
 */
export const isFunction = (val: unknown): val is Fn => typeof val === 'function'

/**
 * @category Is
 *
 */
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

/**
 * @category Is
 *
 */
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'

/**
 * @category Is
 *
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @category Is
 *
 */
export const isNumber = (val: any): val is number => typeof val === 'number'

/**
 * @category Is
 *
 */
export const isNull = (val: unknown): val is null => toTypeString(val) === '[object Null]'

/**
 * @category Is
 *
 */
export const isUndefined = (val: unknown): val is undefined => toTypeString(val) === '[object Undefined]'

/**
 * @category Is
 *
 */
export const isRegExp = (val: unknown): val is RegExp => toTypeString(val) === '[object RegExp]'

/**
 * @category Is
 *
 */
export const isFile = (val: unknown): val is File => toTypeString(val) === '[object File]'

/**
 * @category Is
 *
 * 是否为纯粹的对象
 *
 * @example ```
 * isObject([]) 是 true ，因为 type [] 为 'object'
 * isPlainObject([]) 则是false
 * ```
 */
export const isPlainObject = (val: unknown): val is object => toTypeString(val) === '[object Object]'

/**
 * @category Is
 *
 */
export function isUndef(v: unknown) {
  return isNull(v) || isUndefined(v)
}

/**
 * 是否为空字符串
 */
export function isEmptyString(v: unknown) {
  return isString(v) && v.trim().length === 0
}

/**
 * @category Is
 *
 * 是否为空
 * @example ```
 *  isEmpty(null) // true
 *  isEmpty(undefined) // true
 *  isEmpty('') // true
 *  isEmpty([]) // true
 *  isEmpty({}) // true
 *  isEmpty(' ') // false
 *  isEmpty(123) // true
 *  ```
 */
export function isEmpty(val: any) {
  return val == null || !(Object.keys(val) || val).length
}
