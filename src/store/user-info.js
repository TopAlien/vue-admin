import { defineStore } from 'pinia'
import useDynamicRouterStore from '@/store/dynamic-router.js'
import { getUserInfo, removeToken, removeUserInfo, setToken, setUserInfo } from '@/utils/storage.js'

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
      dynamicRouter.syncRoutes = false
    }
  }
})

export default useUserInfoStore
