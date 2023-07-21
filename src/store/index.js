import { createPinia } from 'pinia'
import userCounterStore from './modules/counter.js'
import useSideMenuStore from './modules/side-menu.js'

const pinia = createPinia()

export { userCounterStore, useSideMenuStore }
export default pinia
