import Layout from '@/layout/index.vue'

const BASE_URL = '/print'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Print',
    meta: {
      title: '打印',
      isGroup: true,
      icon: 'i-carbon-printer'
    },
    children: [
      {
        path: `${BASE_URL}/list`,
        name: 'Print-List',
        component: () => import('@/pages/print/index.vue'),
        meta: {
          title: '打印-1',
          icon: 'i-carbon-printer'
        }
      }
    ]
  }
]
