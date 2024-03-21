import Layout from '@/layout/index.vue'

const BASE_URL = '/case'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Case',
    meta: {
      title: '案例',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: `${BASE_URL}/iso-no`,
        name: 'IsoNo',
        component: () => import('@/pages/case/tab/index.vue'),
        meta: {
          title: '非同源Tab',
          icon: 'i-carbon-data-check'
        }
      }
    ]
  }
]
