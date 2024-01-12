// 屏幕锁
const LOCK_KEY = 'lock_screen'

export const setLock = (isLock) => {
  localStorage.setItem(LOCK_KEY, isLock)
}

export const getLock = () => {
  return JSON.parse(localStorage.getItem(LOCK_KEY) || 'false')
}

// 锁屏密码
const LOCK_PAS_KEY = 'lock_pas'

export const setLockPas = (pas = '123456') => {
  return localStorage.setItem(LOCK_PAS_KEY, pas)
}

export const getLockPas = () => {
  return localStorage.getItem(LOCK_PAS_KEY)
}

// 用户TOKEN
const TOKEN_KEY = 'tk'

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

// 用户信息
const USER_INFO_KEY = 'usi'

export const setUserInfo = (userInfo) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo || {}))
}

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY))
}

export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO_KEY)
}

// 用户权限菜单
const USER_ROUTES_KEY = 'urs'

export const setUserRoutes = (routes) => {
  localStorage.setItem(USER_ROUTES_KEY, JSON.stringify(routes || []))
}

export const getUserRoutes = () => {
  return JSON.parse(localStorage.getItem(USER_ROUTES_KEY))
}

export const removeUserRoutes = () => {
  localStorage.removeItem(USER_ROUTES_KEY)
}
