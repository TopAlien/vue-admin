import { createApp } from 'vue'
import pinia from './store'
import directive from './directive'
import router from '@/router/index.js'
import 'virtual:uno.css'
import './styles/global.less'
import App from './App.vue'

import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

import './bootstrap.js'

const app = createApp(App)
app.use(vue3TreeOrg)
app.use(pinia)
app.use(directive)
app.use(router)
app.mount('#app')
