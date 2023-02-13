/**
 * @category Number
 *
 * 转为数字
 */
export const toNumber = (val: any): any => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * @category Number
 * 保留小数点后面n位数字,四舍五入
 *
 * @returns {string}
 */
export const toFix = (value: string, n: number): string => {
  n = n || 2
  return parseFloat(value).toFixed(n)
}
