import { createPinia } from 'pinia'
import useCounterStore from './modules/counter.js'
import useSideMenuStore from './modules/side-menu.js'
import useSettingStore from './modules/setting.js'

const pinia = createPinia()

export { useCounterStore, useSideMenuStore, useSettingStore }

export default pinia
