import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directive from './directive'
import router from '@/router/index.js'
import 'virtual:uno.css'
import './styles/global.less'
import App from './App.vue'
import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

import { setupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

import './bootstrap.js'

const app = createApp(App)
const pinia = createPinia()
app.use(setupCalendar, {})
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.use(vue3TreeOrg)
app.use(pinia)
app.use(directive)
app.use(router)
app.mount('#app')
