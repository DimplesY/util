import { describe, expect, it } from 'vitest'
import { all, allEqual, insertAt, last, lastN, removeAt } from '../src/array'

describe('array', () => {
  it('removeAt', () => {
    const arr: number[] = [1, 2, 3, 4, 5]
    expect(removeAt<number>(arr, 1)).toBe(undefined)
    expect(arr).toEqual([2, 3, 4, 5])
  })
  it('insertAt', () => {
    const arr: number[] = [1, 2, 3, 4]
    expect(insertAt<number>(arr, 1, 1)).toEqual([1, 2, 1, 3, 4])
  })
  it('last', () => {
    const arr: number[] = [1, 2, 3, 4]
    expect(last(arr)).toBe(4)
  })
  it('lastN', () => {
    const arr: number[] = [1, 2, 3, 4]
    expect(lastN(arr, 1)).toEqual([4])
    expect(lastN(arr, 2)).toEqual([3, 4])
    expect(lastN(arr, 3)).toEqual([2, 3, 4])
  })
  it('all', () => {
    const arr: number[] = [1, 2, 3, 4]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(all(arr, x => x < 5)).toBe(true)
  })
  it('allEqual', () => {
    const arr1: number[] = [1, 1, 1, 1]
    const arr2: number[] = [1, 2, 3, 4]
    expect(allEqual(arr1)).toBe(true)
    expect(allEqual(arr2)).toBe(false)
  })
})

