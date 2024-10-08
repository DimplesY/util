/**
 * 移除数组中的某个元素
 *
 * @category Array
 */
export function removeAt<T>(arr: T[], el: T) {
  const i = arr.indexOf(el)
  if (i > -1)
    arr.splice(i, 1)
}

/**
 * 将值插入到指定索引之后
 *
 * @category Array
 *
 * @example
 * ```
 * let otherArray = [2, 10];
 * insertAt(otherArray, 0, 4, 6, 8); // otherArray = [2, 4, 6, 8, 10]
 * ```
 *
 */
export function insertAt<T>(arr: T[], index: number, ...v: T[]) {
  arr.splice(index + 1, 0, ...v)
  return arr
}

/**
 * 返回数组中的最后一个元素
 *
 * @category Array
 *
 * @example
 * ```
 * last([1, 2, 3]); // 3
 * last([]); // undefined
 * last(null); // undefined
 * last(undefined); // undefined
 * ```
 */
export const last = <T>(arr: T[]) => (arr && arr.length ? arr[arr.length - 1] : undefined)

/**
 * 返回数组中的最后 n 个元素
 *
 * @category Array
 *
 * @example lastN(['a', 'b', 'c', 'd'], 2); // ['c', 'd']
 */
export const lastN = <T>(arr: T[], n: number) => arr.slice(-n)

/**
 * 布尔全等判断
 *
 * @category Array
 *
 * @example all([4, 2, 3], x => x > 1) => true
 */
export function all<T = unknown>(arr: T[], fn: (value: T, index: number, array: T[]) => unknown) {
  return arr.every(fn)
}

/**
 * 检查数组各项相等
 *
 * @category Array
 *
 * @example
 * ```
 * allEqual([4, 4, 4]) => true
 * allEqual([4, 2, 3]) => false
 * ```
 */
export function allEqual(arr: unknown[]) {
  return arr.every(val => val === arr[0])
}

/**
 * Create empty array
 *
 * @param capacity
 * @returns
 */
export function emptyArray<T>(cap: number): T[] {
  return Array.from({ length: cap })
}
