import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', {
  state: () => ({
    collapsed: false,
    openKeys: [],
    selectedKeys: []
  }),
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },

    changeMenu(openKeys, selectedKeys) {
      this.openKeys = openKeys
      this.selectedKeys = selectedKeys
    },
  }
})

export default useSettingStore
