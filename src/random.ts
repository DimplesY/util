/**
 * @category Random
 *
 * 随机十六进制颜色
 */
export function randomHexColorCode() {
  const n = (Math.random() * 0xFFFFF * 1000000).toString(16)
  return `#${n.slice(0, 6)}`
}

/**
 * @category Random
 *
 * 随机 rgb 颜色
 * @param min - 最小值
 * @param max - 最大值
 */
export function randomRgbColor(min = 0, max = 255) {
  const r = randomIntegerInRange(min, max)
  const g = randomIntegerInRange(min, max)
  const b = randomIntegerInRange(min, max)
  return `rgb(${r},${g},${b})`
}

/**
 * @category Random
 *
 * 随机布尔值
 */
export function randomBoolean() {
  return Math.random() >= 0.5
}

/**
 * @category Random
 *
 * 生成指定范围的随机整数
 * @param min - 最小值
 * @param max - 最大值
 */
export function randomIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @category Random
 *
 * 生成指定范围的随机小数
 * @param min - 最小值
 * @param max - 最大值
 *
 * @example (0,5) => 3.0211363285087005
 */
export function randomNumberInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}
