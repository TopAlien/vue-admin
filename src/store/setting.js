import { defineStore } from 'pinia'
import { getLock, setLock } from '@/utils/storage.js'

const useSettingStore = defineStore('setting', {
  state: () => ({
    collapsed: false,
    openKeys: [],
    selectedKeys: [],

    lockScreen: getLock(),

    contentSpin: false
  }),
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },

    changeMenu(openKeys, selectedKeys) {
      this.openKeys = openKeys
      this.selectedKeys = selectedKeys
    },

    toggleLock() {
      this.lockScreen = !this.lockScreen
      setLock(this.lockScreen)
    },

    changeSpin(contentSpin) {
      this.contentSpin = contentSpin
    }
  }
})

export default useSettingStore
