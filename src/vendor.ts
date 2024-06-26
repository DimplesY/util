export { throttle, debounce } from 'throttle-debounce'

/**
 * @category Vendor
 *
 * @see https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 *
 * @param { Readonly<Promise<T>> } promise
 * @param {object} errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Readonly<Promise<T>>,
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }

      return [err, undefined]
    })
}
