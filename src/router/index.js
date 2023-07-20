import { createRouter, createWebHistory } from 'vue-router'
import { BASE_ROUTE } from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes: BASE_ROUTE,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
