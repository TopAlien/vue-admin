import Layout from '@/layout/index.vue'

const BASE_URL = '/list'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'List',
    meta: {
      title: '列表',
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: `${BASE_URL}/search`,
        name: 'List-Search',
        component: () => import('@/pages/list/search-list/index.vue'),
        meta: {
          title: '查询表格',
          icon: 'i-carbon-list'
        }
      },
      {
        path: `${BASE_URL}/card`,
        name: 'List-Card',
        component: () => import('@/pages/list/card-list/index.vue'),
        meta: {
          title: '卡片表格',
          icon: 'i-carbon-list-boxes'
        }
      }
    ]
  }
]
