import Layout from '@/layout/index.vue'

// 404 on a page
const PAGE_NOT_FOUND_ROUTE = [
  {
    path: '/:path(.*)*',
    name: '404-page',
    component: Layout,
    meta: {
      title: '404页面找不到',
      hideMenu: true,
      hideBreadcrumb: true
    },
    children: [
      {
        path: '/:path(.*)*',
        name: '404-page',
        component: () => import('@/pages/error-page/404.vue'),
        meta: {
          title: '404页面找不到',
          hideMenu: true,
          hideBreadcrumb: true
        },
      }
    ]
  }
]

export const BASE_ROUTE = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  ...PAGE_NOT_FOUND_ROUTE
]
