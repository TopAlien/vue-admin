import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', {
  state: () => ({
    collapsed: false
  }),
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
})

export default useSettingStore
