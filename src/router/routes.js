import Layout from '@/layout/index.vue'

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

// TIP path必须写完整的路径，要做跳转匹配
export const BASE_ROUTE = [
  {
    path: '/',
    component: Layout,
    name: 'Base',
    redirect: '/home',
    meta: {
      title: '首页',
      isGroup: true
    },
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

  {
    path: '/com',
    component: Layout,
    name: 'Com',
    redirect: '/com/list',
    meta: {
      title: '组件',
      isGroup: true
    },
    children: [
      {
        path: '/com/list',
        name: 'List',
        meta: {
          title: '列表'
        },
        redirect: '/com/list/list2',
        children: [
          {
            path: '/com/list/list2',
            name: 'List2',
            component: () => import('@/pages/dashboard/index.vue'),
            meta: {
              title: '列表2'
            }
          },
          {
            path: '/com/list/list3',
            name: 'List3',
            component: () => import('@/pages/dashboard/index.vue'),
            meta: {
              title: '列表3'
            }
          }
        ]
      },
      {
        path: '/com/list-1',
        name: 'List-1',
        meta: {
          title: '列表-1'
        },
        redirect: '/com/list-1/list2-1',
        children: [
          {
            path: '/com/list-1/list2-1',
            name: 'List2-1',
            component: () => import('@/pages/dashboard/index.vue'),
            meta: {
              title: '列表2-1'
            }
          },
          {
            path: '/com/list-1/list3-1',
            name: 'List3-1',
            component: () => import('@/pages/error-page/404.vue'),
            meta: {
              title: '列表3-1'
            }
          }
        ]
      }
    ]
  },

  ...PAGE_NOT_FOUND_ROUTE
]
