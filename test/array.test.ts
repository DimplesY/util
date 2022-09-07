import { describe, expect, it } from 'vitest'
import { insertAt, removeAt } from '../src/array'

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
})
