import { defineStore } from 'pinia'
import useFetch from '@/hooks/useFetch/index.js'
import config from '@/config/index.js'
import { DYNAMIC_ROUTE } from '@/router/routes.js'
import { API_USER } from '@/service/user/index.js'

const HAS_KEY = 'path'
const hasPermission = (flattenApiRoutes, route) => {
  if (route[HAS_KEY]) {
    return flattenApiRoutes.findIndex((systemRoute) => systemRoute[HAS_KEY] === route[HAS_KEY]) >= 0
  } else {
    return false
  }
}

const filterAsyncRoutes = (flattenApiRoutes, systemRoutes) => {
  const res = []

  systemRoutes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(flattenApiRoutes, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(flattenApiRoutes, tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

const flattenSystemRoutes = (routes) => {
  const res = []

  const filterRoutes = (routes) => {
    routes.forEach((item) => {
      if (item.children && item.children.length) {
        filterRoutes(item.children)
        item.children = []
      }
      res.push(item)
    })
  }
  filterRoutes(routes)

  return res
}

const useDynamicRouterStore = defineStore('dynamicRouter', {
  state: () => ({
    syncRoutes: false,
    roleRoutes: []
  }),
  actions: {
    async generator() {
      if (config.useDynamicRoute) {
        return filterAsyncRoutes(flattenSystemRoutes(this.roleRoutes), DYNAMIC_ROUTE)
      }

      return DYNAMIC_ROUTE
    },

    async getUserRoutes() {
      if (config.useDynamicRoute) {
        const { data } = await useFetch(API_USER.roleRoutes).json()
        this.roleRoutes = data.value.routes
      }
    }
  }
})

export default useDynamicRouterStore
