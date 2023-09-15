import Layout from '@/layout/index.vue'

const BASE_URL = '/other'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Other',
    redirect: `${BASE_URL}/check`,
    meta: {
      title: '其他',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: `${BASE_URL}/check`,
        name: 'OtherList',
        component: () => import('@/pages/other/check-card/index.vue'),
        meta: {
          title: 'CheckCard',
          icon: 'i-carbon-data-check'
        }
      },
      {
        path: `${BASE_URL}/watermark`,
        name: 'Watermark',
        component: () => import('@/pages/other/watermark/index.vue'),
        meta: {
          title: '水印',
          icon: 'i-carbon-encryption'
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
          icon: 'i-carbon-ibm-content-services'
        }
      },
      {
        path: `${BASE_URL}/org`,
        name: 'OrgTree',
        component: () => import('@/pages/other/org_tree/index.vue'),
        meta: {
          title: 'OrgTree',
          icon: 'i-carbon-decision-tree'
        }
      },
      {
        path: `${BASE_URL}/calendar`,
        name: 'Calendar',
        component: () => import('@/pages/other/calendar/index.vue'),
        meta: {
          title: '日历',
          icon: 'i-carbon-calendar'
        }
      }
    ]
  }
]
