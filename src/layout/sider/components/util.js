export const getTabMenu = (routes) => {
  const tabMenu = []
  routes.forEach((it) => {
    const { isGroup, hideInMenu } = it.meta || {}
    if (isGroup && !hideInMenu) {
      tabMenu.push(it)
    }
  })

  return tabMenu
}

const tabMenuMap = new Map()
export const getTabIndex = (tabMenu, route) => {
  const firstRoute = (route.matched || [])[0]?.path
  if (!tabMenuMap.has(firstRoute)) {
    tabMenuMap.set(
      firstRoute,
      tabMenu.findIndex((it) => (route.matched || []).map((item) => item.path).includes(it.path)) || 0
    )
  }

  return tabMenuMap.get(firstRoute)
}

export const getRedirectPath = (route) => {
  if (!route) return ''

  let path = route.path
  const getPath = (child) => {
    if (child[0].children && child[0].children.length) {
      getPath(child[0].children)
    } else {
      path = child[0].path
    }
  }

  if (route.children && route.children.length) {
    getPath(route.children)
  }

  return path
}
