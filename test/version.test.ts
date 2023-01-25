import { describe, expect, it } from 'vitest'
import { compareVersion } from '../src/version'

describe('version', () => {
  it('compareVersion', () => {
    expect(compareVersion('1.0.0', '1.0.0')).toBe(0)
  })
})
