// 屏幕锁
const LOCK_KEY = 'lock_screen'

export const setLock = (isLock) => {
  localStorage.setItem(LOCK_KEY, isLock)
}

export const getLock = () => {
  return JSON.parse(localStorage.getItem(LOCK_KEY) || 'false')
}
