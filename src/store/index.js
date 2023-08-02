import { createPinia } from 'pinia'
import userCounterStore from './modules/counter.js'
import useSideMenuStore from './modules/side-menu.js'
import useSettingStore from './modules/setting.js'

const pinia = createPinia()

export { userCounterStore, useSideMenuStore, useSettingStore }

export default pinia
