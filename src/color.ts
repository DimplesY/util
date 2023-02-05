import { isString } from '.'

/**
 * rgb转hex
 *
 * @category Color
 *
 */
export function rgbToHex(r: string | number, g: string | number, b: string | number) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * 数字转16进制
 *
 * @category Color
 */
export function toHex(n: string | number) {
  if (isString(n))
    n = parseInt(n, 10)
  if (isNaN(n))
    return '00'
  n = Math.max(0, Math.min(n, 255))
  return '0123456789ABCDEF'.charAt((n - n % 16) / 16)
    + '0123456789ABCDEF'.charAt(n % 16)
}

/**
 * 十六进制颜色转RGB颜色
 *
 * @category Color
 */
export function hexToRGB(hex: string) {
  if (hex.length === 4) {
    const text = hex.substring(1, 4)
    hex = `#${text}${text}`
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}
