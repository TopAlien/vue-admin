import Layout from '@/layout/index.vue'
import HomeGroup from './group/home.js'
import ComGroup from './group/com.js'
import OtherGroup from './group/other.js'
import ListGroup from './group/list.js'

// 404 on a page
const PAGE_NOT_FOUND_ROUTE = [
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
        name: '404-page',
        component: () => import('@/pages/error-page/404.vue'),
        meta: {
          title: '404页面找不到'
        }
      }
    ]
  }
]

/**
 * meta: { icon, hideInMenu, title }
 *
 * TIP path必须写完整的路径，要做跳转匹配
 */
export const BASE_ROUTE = [...HomeGroup, ...ComGroup, ...OtherGroup, ...ListGroup, ...PAGE_NOT_FOUND_ROUTE]
