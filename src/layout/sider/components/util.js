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

export const getTabIndex = (tabMenu, route) => {
  return (
    tabMenu.findIndex((it) => {
      const matchedPath = (route.matched || []).map((item) => item.path)
      return matchedPath.includes(it.path)
    }) || 0
  )
}
