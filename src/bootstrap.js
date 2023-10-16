import router from '@/router/index.js'
import config from '@/config/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { scrollToByEl } from '@/utils/index.js'
import useDynamicRouterStore from '@/store/dynamic-router.js'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from) => {
  NProgress.start()

  document.title = to.meta.title || config.title

  const dynamicRouter = useDynamicRouterStore()
  if (!dynamicRouter.syncRoutes) {
    const resultRoute = dynamicRouter.generator()
    resultRoute.forEach((route) => router.addRoute(route))

    dynamicRouter.syncRoutes = true

    router.replace(to.fullPath)
  }

  scrollToByEl({ el: '.content_wrap' })
  NProgress.done()
})
