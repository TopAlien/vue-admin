import { h } from 'vue'
import { defineStore } from 'pinia'
const transMenuData = (menus) => {
  menus.forEach((it) => {
    const { meta, path, name, ...other } = it
    if (it.children && it.children.length > 0) {
      it.children = transMenuData(it.children)
    }
    it.label = meta.title
    it.key = path
    it.icon = meta.icon ? h('i', { class: meta.icon }) : ''
  })
  return menus
}

const emptyMenu = [{ label: '', key: '' }]

const menuMap = new WeakMap()
const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({ menus: emptyMenu }),
  actions: {
    changeSide(side) {
      const hasSide = menuMap.has(side)
      if (!hasSide) {
        menuMap.set(side, transMenuData(JSON.parse(JSON.stringify(side.children))) || [])
      }
      this.menus = menuMap.get(side)
    }
  }
})
export default useSideMenuStore
