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
            component: () => import('@/pages/error-page/404.vue'),
            meta: {
              title: '列表3-1'
            }
          }
        ]
      },
      {
        path: `${BASE_URL}/list-5`,
        redirect: `${BASE_URL}/list-5/list2`,
        name: 'List-4',
        meta: {
          title: '列表',
          icon: 'i-carbon-list'
        },
        children: [
          {
            path: `${BASE_URL}/list-5/list2`,
            name: 'List-5',
            component: () => import('@/pages/test/list.vue'),
            meta: {
              title: '列表2'
            }
          },
          {
            path: `${BASE_URL}/list-5/list3`,
            name: 'List-6',
            component: () => import('@/pages/test/test2.vue'),
            meta: {
              title: '列表3'
            }
          }
        ]
      }
    ]
  }
]
