import { createApp } from 'vue'
import pinia from './store'
import directive from './directive'
import 'virtual:uno.css'
import App from './App.vue'

console.log(import.meta.env)

const app = createApp(App)
app.use(pinia)
app.use(directive)
app.mount('#app')
