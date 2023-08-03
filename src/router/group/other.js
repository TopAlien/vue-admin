import Layout from '@/layout/index.vue'

const BASE_URL = '/other'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Other',
    redirect: `${BASE_URL}/list`,
    meta: {
      title: '其他',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: `${BASE_URL}/list`,
        name: 'OtherList',
        component: () => import('@/pages/other/icons/index.vue'),
        meta: {
          title: 'CheckCard',
          icon: 'i-carbon-list-boxes'
        }
      },
      {
        path: `${BASE_URL}/watermark`,
        name: 'Watermark',
        component: () => import('@/pages/other/watermark/index.vue'),
        meta: {
          title: '水印',
          icon: 'i-carbon-list-boxes'
        }
      },
      {
        path: `${BASE_URL}/list1`,
        name: 'OtherList1',
        component: () => import('@/pages/test/test2.vue'),
        meta: {
          title: '其他-1',
          icon: 'i-carbon-home'
        }
      },
      {
        path: `${BASE_URL}/icons`,
        name: 'Icons',
        component: () => import('@/pages/other/icons/index.vue'),
        meta: {
          title: '图标',
          icon: 'i-carbon-location-heart'
        }
      }
    ]
  }
]
