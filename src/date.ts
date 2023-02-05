import dayjs from 'dayjs'

export enum FormatType {
  toMinute = 'YYYY-MM-DD HH:mm',
  toHour = 'YYYY-MM-DD HH',
  toDay = 'YYYY-MM-DD',
  toMonth = 'YYYY-MM',
  toYear = 'YYYY',
  toSecond = 'YYYY-MM-DD HH:mm:ss',
}

type DateFormat = FormatType | string

type IDate = Date | string

/**
 * 格式化日期
 *
 * @category Date
 *
 */
export function formatDate(date?: IDate, format: DateFormat = FormatType.toSecond): string {
  if (!date)
    date = new Date()

  return dayjs(date).format(format)
}

/**
 * 获取当前时间
 *
 * @category Date
 */
export function getNow(format: DateFormat = FormatType.toDay): string {
  return dayjs().format(format)
}

/**
 * 获取月第一天
 *
 * @category Date
 */
export function getFirstDayOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string {
  if (!date)
    date = new Date()

  return dayjs(date).startOf('month').format(format)
}

/**
 * 获取月最后一天
 *
 * @category Date
 */
export function getLastDayOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string {
  if (!date)
    date = new Date()

  return dayjs(date).endOf('month').format(format)
}

/**
 * 获取整月
 *
 * @category Date
 */
export function getDaysOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string[] {
  return [getFirstDayOfMonth(date, format), getLastDayOfMonth(date, format)]
}

/**
 * 获取上个月
 *
 * @category Date
 */
export function getDaysOfLastMonth(format = FormatType.toDay): string[] {
  const month = dayjs().subtract(1, 'month').toDate()
  return [getFirstDayOfMonth(month, format), getLastDayOfMonth(month, format)]
}

/**
 * 获取月第一天 到 现在
 *
 * @category Date
 */
export function getDaysToNowOfMonth(date?: IDate, format = FormatType.toDay): string[] {
  return [getFirstDayOfMonth(date, format), getNow(format)]
}

/**
 * 获取年第一天
 *
 * @category Date
 */
export function getFirstDayOfYear(date?: IDate, format = FormatType.toDay): string {
  if (!date)
    date = new Date()

  return dayjs(date).startOf('year').format(format)
}

/**
 * 本周
 *
 * @category Date
 */
export function getDaysOfWeek(format = FormatType.toDay): string[] {
  return [dayjs().startOf('week').format(format), dayjs().endOf('week').format(format)]
}

/**
 * d2是否在d1之后
 *
 * @category Date
 */
export function isAfter(d1: IDate, d2: IDate = new Date()): boolean {
  return dayjs(d2).isAfter(d1)
}

/**
 * d2是否在d1之前
 *
 * @category Date
 */
export function isBefore(d1: IDate, d2: IDate = new Date()): boolean {
  return dayjs(d2).isBefore(d1)
}

/**
 * d3是否在d1与d2之间
 *
 * @category Date
 */
export function isBetween(d1: IDate, d2: IDate, d3: IDate = new Date()): boolean {
  return isAfter(d1, d3) && isBefore(d2, d3)
}

/**
 * 加几天
 *
 * @category Date
 */
export function addDays(days = 1, d: IDate = new Date(), format = FormatType.toDay): IDate {
  return dayjs(d).add(days, 'day').format(format)
}

/**
 * 减几天
 *
 * @category Date
 */
export function subDays(days = 1, d: IDate = new Date(), format = FormatType.toDay): IDate {
  return dayjs(d).subtract(days, 'day').format(format)
}

/**
 * 转换成 Date
 *
 * @category Date
 */
export function toDate(date: string | string[]) {
  if (typeof date === 'string')
    return dayjs(date).toDate()

  return date.map(item => dayjs(item).toDate())
}
