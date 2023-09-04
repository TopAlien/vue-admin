import router from '@/router/index.js'
import config from '@/config/index.js'
import { scrollTo } from '@/utils/index.js'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || config.title

  scrollTo()

  next()
})
