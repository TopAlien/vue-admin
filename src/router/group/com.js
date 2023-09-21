import Layout from '@/layout/index.vue'

const BASE_URL = '/com'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Com',
    redirect: `${BASE_URL}/list-1/list2-1`,
    meta: {
      title: '组件',
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: `${BASE_URL}/list-1`,
        redirect: `${BASE_URL}/list-1/list2-1`,
        name: 'List-1',
        meta: {
          title: '列表-1',
          icon: 'i-carbon-list-boxes'
        },
        children: [
          {
            path: `${BASE_URL}/list-1/list2-1`,
            name: 'List2-1',
            component: () => import('@/pages/test/test2.vue'),
            meta: {
              title: '列表2-1'
            }
          },
          {
            path: `${BASE_URL}/list-1/list3-1`,
            name: 'List3-1',
            component: () => import('@/pages/exception/404-page.vue'),
            meta: {
              title: '列表3-1'
            }
          }
        ]
      },
      {
        path: `${BASE_URL}/count-down`,
        name: 'CountDown',
        component: () => import('@/pages/com/count-down/index.vue'),
        meta: {
          title: '倒计时',
          icon: 'i-carbon-time'
        }
      }
    ]
  }
]
