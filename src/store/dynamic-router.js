import { defineStore } from 'pinia'
import config from '@/config/index.js'
import { adminRoutes } from '@/mock/data.js'
import { DYNAMIC_ROUTE } from '@/router/routes.js'

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
    syncRoutes: false
  }),
  actions: {
    generator() {
      return config.useDynamicRoute ? filterAsyncRoutes(flattenSystemRoutes(adminRoutes), DYNAMIC_ROUTE) : DYNAMIC_ROUTE
    }
  }
})

export default useDynamicRouterStore
