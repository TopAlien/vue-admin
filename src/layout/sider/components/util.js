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
  getPath([route])

  return path
}
