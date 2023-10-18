import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directive from './directive'
import globalComponent from '@/components/global.component.js'
import router from '@/router/index.js'
import 'virtual:uno.css'
import './styles/global.less'
import App from './App.vue'

import './bootstrap.js'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(directive)
app.use(globalComponent)
app.use(router)
app.mount('#app')
