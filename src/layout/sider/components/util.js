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
