import router from '@/router/index.js'
import config from '@/config/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useDynamicRouterStore from '@/store/dynamic-router.js'
import { scrollToByEl } from '@/utils/index.js'
import { getToken } from '@/utils/storage.js'
const LOGIN_PATH = '/login'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from) => {
  NProgress.start()

  document.title = to.meta.title || config.title

  const token = getToken()
  if (token) {
    if (to.path === LOGIN_PATH) {
      router.replace('/')
    } else {
      const dynamicRouter = useDynamicRouterStore()
      if (!dynamicRouter.syncRoutes) {
        const resultRoute = dynamicRouter.generator()
        resultRoute.forEach((route) => router.addRoute(route))

        dynamicRouter.syncRoutes = true

        // TIP: 如果想做登录后的redirect，需要检测路径是否存在（权限变更，路径不存在等问题）
        router.replace(to.fullPath)
      }
    }
  } else {
    to.path !== LOGIN_PATH && router.replace(`${LOGIN_PATH}?redirect=${to.fullPath}`)
  }

  scrollToByEl({ el: '.content_wrap' })
  NProgress.done()
})
