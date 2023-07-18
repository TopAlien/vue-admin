import { createPinia } from 'pinia'
import userCounterStore  from './modules/counter.js'

const pinia = createPinia()

export { userCounterStore }
export default pinia
