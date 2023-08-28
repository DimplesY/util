import { describe, expect, it } from 'vitest'
import { isArray, isMap, isSet } from '../src'

describe('is', () => {
  it('is Array', () => {
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('is map', () => {
    const m = new Map()
    expect(isMap(m)).toBe(true)
  })

  it('is set', () => {
    const s = new Set()
    expect(isSet(s)).toBe(true)
  })
})
