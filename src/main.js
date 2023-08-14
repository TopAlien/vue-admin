import { createApp } from 'vue'
import pinia from './store'
import directive from './directive'
import router from '@/router/index.js'
import 'virtual:uno.css'
import './styles/global.less'
import App from './App.vue'

import './bootstrap.js'

const app = createApp(App)
app.use(pinia)
app.use(directive)
app.use(router)
app.mount('#app')
