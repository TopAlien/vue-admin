import Layout from '@/layout/index.vue'
import HomeGroup from './group/home.js'
import ComGroup from './group/com.js'
import PluginGroup from './group/plugin.js'
import CaseGroup from './group/case.js'
import ListGroup from './group/list.js'
import ExceptionGroup from './group/exception.js'
import ChartGroup from './group/chart.js'
import PrintGroup from './group/print.js'
import UserGroup from './group/user.js'
import SettingGroup from './group/setting.js'

/**
 * meta: { icon, hideInMenu, title }
 *
 * TIP path必须写完整的路径，要做跳转匹配， path必填项-要匹配路由
 */
export const BASE_ROUTE = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  ...HomeGroup,
  ...ExceptionGroup,
  {
    path: '/:path(.*)*',
    name: '404-page',
    component: Layout,
    meta: {
      title: '404页面找不到'
    },
    children: [
      {
        path: '/:path(.*)*',
        name: '404-child-page',
        component: () => import('@/pages/exception/404-page.vue'),
        meta: {
          title: '404页面找不到'
        }
      }
    ]
  }
]

export const DYNAMIC_ROUTE = [
  ...ComGroup,
  ...PluginGroup,
  ...CaseGroup,
  ...ChartGroup,
  ...UserGroup,
  ...ListGroup,
  ...PrintGroup,
  ...SettingGroup
]
