import Layout from '@/layout/index.vue'

const BASE_URL = '/exception'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Exception',
    redirect: `${BASE_URL}/404-page`,
    meta: {
      title: '异常页',
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: `${BASE_URL}/404-page`,
        name: '404-PAGE',
        component: () => import('@/pages/exception/404-page.vue'),
        meta: {
          title: '404',
          icon: 'i-carbon-list-boxes'
        }
      },
      {
        path: `${BASE_URL}/401-page`,
        name: '401-PAGE',
        component: () => import('@/pages/exception/401-page.vue'),
        meta: {
          title: '401',
          icon: 'i-carbon-list-boxes'
        }
      },
      {
        path: `${BASE_URL}/500-page`,
        name: '500-PAGE',
        component: () => import('@/pages/exception/500-page.vue'),
        meta: {
          title: '50x',
          icon: 'i-carbon-list-boxes'
        }
      }
    ]
  }
]
