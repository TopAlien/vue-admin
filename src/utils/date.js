import dayjs from 'dayjs'
import { message } from 'ant-design-vue'

const _getDayOrigin = (date) => {
  const curDay = dayjs(date)
  if (!curDay.isValid()) {
    const err = `存在不合法的日期格式：${date}`
    message.error(err)
    console.error(err)
  }

  return curDay
}

/**
 *
 * 某个日期的 - 几天前后
 * A few days ago or so
 * @param dayNum
 * @param date
 * @returns {string}
 * @example
 *
 * afterDay(1)
 * afterDay(-7)
 */
export const dayAgoOrSo = (dayNum = 0, date) => {
  return _getDayOrigin(date).add(dayNum, 'day').format('YYYY-MM-DD')
}

/**
 * 日期补充00:00:00
 * @param date
 * @returns {string}
 *
 * @example
 * dayStartTime('2023-01-01') - 2023-01-01:00:00:00
 * dayStartTime('2023-01-01 12:00:11') - 2023-01-01:00:00:00
 */
export const dayStartTime = (date) => {
  return _getDayOrigin(date).startOf('day').format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 日期补充23:59:59
 * @param date
 * @returns {string}
 *
 * @example
 * dayEndTime('2023-01-01') - 2023-01-01:00:00:00
 * dayEndTime('2023-01-01 12:00:11') - 2023-01-01:00:00:00
 */
export const dayEndTime = (date) => {
  return _getDayOrigin(date).endOf('day').format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 获取日期区间的开始结束日期补充 00:00:00 - 23:59:59
 * @param dateArr
 * @returns {[string,string]|*[]}
 */
export const dayStartEndTime = (dateArr) => {
  if (!Array.isArray(dateArr)) {
    console.error("dayStartEndTime 入参是一个日期数组 例：['2023-01-01', '2023-01-22']")
    return []
  }

  if (dateArr.length === 0) {
    return []
  }

  return [dayStartTime(dateArr[0]), dayEndTime(dateArr[1])]
}

/**
 * 获取 UNIX 时间戳，10位数字，秒
 * @param date
 * @returns {number}
 */
export const getUnixTime = (date) => {
  return _getDayOrigin(date).unix()
}

/**
 * 获取 UNIX 时间戳，13位数字，毫秒
 * @param date
 * @returns {number}
 */
export const getTimeMill = (date) => {
  return _getDayOrigin(date).valueOf()
}

/**
 *
 * @param date date小于当前时间
 */
const ONE_HOUR = 60 * 60
export const fromCurrentTime = (date) => {
  const dateUnixTime = getUnixTime(date)
  const currentUnixTime = getUnixTime()

  const spaceTime = Math.abs(currentUnixTime - dateUnixTime)

  if (spaceTime < ONE_HOUR) {
    return `${parseInt(String(spaceTime / 60))}分钟前`
  } else if (spaceTime < ONE_HOUR * 24) {
    return `${parseInt(String(spaceTime / ONE_HOUR))}小时前`
  } else if (spaceTime < ONE_HOUR * 24 * 2) {
    return '昨天'
  } else {
    return `${parseInt(String(spaceTime / (ONE_HOUR * 24)))}天前`
  }
}
