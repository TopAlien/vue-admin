import router from '@/router/index.js'
import config from '@/config/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useDynamicRouterStore from '@/store/dynamic-router.js'
import { scrollToByEl } from '@/utils/index.js'
import { getToken, setLockPas, getLockPas } from '@/utils/storage.js'
import { setRouteEmitter } from '@/utils/router-listener.js'

const LOGIN_PATH = '/login'

/// set default lock screen pas
if (!getLockPas()) {
  setLockPas()
}

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to) => {
  setRouteEmitter(to)

  NProgress.start()

  document.title = to.meta.title || config.title

  const token = getToken()
  if (token) {
    if (to.path === LOGIN_PATH) {
      router.replace('/')
    } else {
      const dynamicRouter = useDynamicRouterStore()
      if (!dynamicRouter.syncRoutes) {
        await dynamicRouter.getUserRoutes()

        const resultRoute = await dynamicRouter.generator()

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
