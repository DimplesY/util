import { describe, expect, it } from 'vitest'
import { FormatType, formatDate, getDaysOfLastMonth, getDaysOfMonth, getFirstDayOfMonth, getLastDayOfMonth, getNow } from '../src/date'

describe('date', () => {
  it('formatDate', () => {
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0))).toBe('2021-01-01 00:00:00')
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0), FormatType.toYear)).toBe('2021')
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0), FormatType.toMonth)).toBe('2021-01')
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0), FormatType.toDay)).toBe('2021-01-01')
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0), FormatType.toHour)).toBe('2021-01-01 00')
    expect(formatDate(new Date(2021, 0, 1, 0, 0, 0, 0), FormatType.toMinute)).toBe('2021-01-01 00:00')
  })

  it('getNow', () => {
    expect(getNow()).toBe(formatDate(new Date(), FormatType.toDay))
  })

  it('getFirstDayOfMonth', () => {
    expect(getFirstDayOfMonth(new Date('2022-11-20'))).toBe('2022-11-01')
  })

  it('getLastDayOfMonth', () => {
    expect(getLastDayOfMonth(new Date('2022-11-20'))).toBe('2022-11-30')
  })

  it('getDaysOfMonth', () => {
    expect(getDaysOfMonth(new Date('2022-11-20'))).toEqual(['2022-11-01', '2022-11-30'])
  })

  it('getDaysOfLastMonth', () => {
    // The test case time: 2022-11-12
    // expect(getDaysOfLastMonth()).toEqual(['2022-10-01', '2022-10-31'])
  })
})
