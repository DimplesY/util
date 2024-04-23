/**
 * @category Number
 *
 * 转为数字
 */
export function toNumber(val: any): any {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

/**
 * @category Number
 * 保留小数点后面n位数字,四舍五入
 *
 */
export function toFix(value: string, n: number): string {
  n = n || 2
  return Number.parseFloat(value).toFixed(n)
}
