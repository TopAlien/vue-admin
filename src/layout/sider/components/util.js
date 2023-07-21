export const getTabMenu = (routes) => {
  const tabMenu = []
  routes.forEach((it) => {
    if (it.meta && it.meta.isGroup) {
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
