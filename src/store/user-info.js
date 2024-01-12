import { defineStore } from 'pinia'
import useDynamicRouterStore from '@/store/dynamic-router.js'
import { removeRouteListener } from '@/utils/router-listener.js'
import {
  getUserInfo,
  removeToken,
  removeUserInfo,
  removeUserRoutes,
  setToken,
  setUserInfo
} from '@/utils/storage.js'

const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    userInfo: getUserInfo()
  }),
  actions: {
    login() {
      const us = { name: 'Ealien', age: 18 }

      this.userInfo = us
      setUserInfo(us)
      setToken('asdasd')
    },
    logout() {
      const dynamicRouter = useDynamicRouterStore()

      removeToken()
      this.userInfo = {}
      removeUserInfo()
      removeRouteListener()
      dynamicRouter.syncRoutes = false
      removeUserRoutes()
    }
  }
})

export default useUserInfoStore
