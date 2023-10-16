import router from '@/router/index.js'
import config from '@/config/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { scrollToByEl } from '@/utils/index.js'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()

  document.title = to.meta.title || config.title

  scrollToByEl({ el: '.content_wrap' })

  next()

  NProgress.done()
})
