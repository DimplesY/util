import { describe, expect, it, vi } from 'vitest'
import { hexToRGB, rgbToHex, toHex } from '../src'

describe('color', () => {
  it('rgbToHex', () => {
    expect(rgbToHex(255, 255, 255)).toEqual('#FFFFFF')
  })

  it('toHex', () => {
    expect(toHex(16)).toBe('10')
  })

  it('hexToRGB', () => {
    expect(hexToRGB('#FFFFFF')).toMatchInlineSnapshot(`
      {
        "b": 255,
        "g": 255,
        "r": 255,
      }
    `)
  })
})
