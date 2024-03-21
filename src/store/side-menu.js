import { h } from 'vue'
import { defineStore } from 'pinia'
import config from '@/config/index.js'

const generator = (routerMap) => {
  return routerMap.map((item) => {
    const { title, hideInMenu, icon } = item.meta || {}
    const currentRouter = {
      label: title,
      key: item.path,
      icon: icon ? h('i', { class: icon }) : null
      // router警告组件是响应式时可使用 shallowRef 包裹
      // https://cn.vuejs.org/api/reactivity-advanced.html#shallowref
    }

    item.redirect && (currentRouter.redirect = item.redirect)

    if (item.children && item.children.length > 0) {
      currentRouter.children = generator(item.children)
    }
    return hideInMenu ? null : currentRouter
  })
}

const emptyMenu = [{ label: '', key: '' }]

const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({ menus: emptyMenu, menuMap: new Map() }),
  getters: {
    onlyMenu() {
      return config.onlyMenu
        ? this.menus.length > 1 || (this.menus[0] && this.menus[0].children && this.menus[0].children.length)
        : true
    }
  },
  actions: {
    changeSide(side) {
      if(!side) return
      
      if (!this.menuMap.has(side.path)) {
        this.menuMap.set(side.path, generator(side.children) || [])
      }

      this.menus = this.menuMap.get(side.path)
    }
  }
})

export default useSideMenuStore
