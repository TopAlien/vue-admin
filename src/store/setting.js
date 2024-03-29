import { defineStore } from 'pinia'
import { getLock, setLock } from '@/utils/storage.js'

const useSettingStore = defineStore('setting', {
  state: () => ({
    collapsed: false,
    openKeys: [],
    selectedKeys: [],

    lockScreen: getLock()
  }),
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },

    changeMenuHighlight(openKeys, selectedKeys) {
      this.openKeys = openKeys
      this.selectedKeys = selectedKeys
    },

    toggleLock() {
      this.lockScreen = !this.lockScreen
      setLock(this.lockScreen)
    }
  }
})

export default useSettingStore
