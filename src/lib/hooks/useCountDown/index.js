import { ref, computed, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { raf, cancelRaf, inBrowser } from '../util.js'

// export type CurrentTime = {
//   days: number;
//   hours: number;
//   total: number;
//   minutes: number;
//   seconds: number;
//   milliseconds: number;
// };

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 *
 * @param time { number }
 * @returns {{ milliseconds: number, total: number, hours: number, seconds: number, minutes: number, days: number }}
 */
function parseTime(time) {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

/**
 *
 * @param time1 { number }
 * @param time2 { number }
 * @returns { boolean }
 */
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}

/**
 * @param options UseCountDownOptions = {
 *   time: number;
 *   millisecond?: boolean;
 *   onChange?: (current: CurrentTime) => void;
 *   onFinish?: () => void;
 * }
 * @returns {{current: ComputedRef<{CurrentTime}>, start: (function(): void), reset: (function(number=): void), pause: (function(): void)}}
 */
// 文档详情: https://vant-ui.github.io/vant/#/zh-CN/count-down
export function useCountDown(options) {
  let rafId
  let endTime
  let counting
  let deactivated

  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))

  const pause = () => {
    counting = false
    cancelRaf(rafId)
  }

  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)

  /**
   * @param value { number }
   */
  const setRemain = (value) => {
    remain.value = value
    options.onChange?.(current.value)

    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }

  const microTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        setRemain(getCurrentRemain())

        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }

  const macroTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        const remainRemain = getCurrentRemain()

        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }

  const tick = () => {
    // should not start counting in server
    // see: https://github.com/vant-ui/vant/issues/7807
    if (!inBrowser) {
      return
    }

    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }

  /**
   *
   * @param totalTime { number }
   */
  const reset = (totalTime = options.time) => {
    pause()
    remain.value = totalTime
  }

  onBeforeUnmount(pause)

  onActivated(() => {
    if (deactivated) {
      counting = true
      deactivated = false
      tick()
    }
  })

  onDeactivated(() => {
    if (counting) {
      pause()
      deactivated = true
    }
  })

  return {
    start,
    pause,
    reset,
    current
  }
}
