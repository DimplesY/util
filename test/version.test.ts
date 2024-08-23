import { describe, expect, it } from 'vitest'
import { compareVersion } from '../src/version'

describe('version', () => {
  it('compareVersion', () => {
    expect(compareVersion('1.2.0', '1.11.0')).toBe(-1)
  })
})
