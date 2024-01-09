import Layout from '@/layout/index.vue'

const BASE_URL = '/other'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Other',
    redirect: `${BASE_URL}/check`,
    meta: {
      title: '插件',
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
        path: `${BASE_URL}/idcard`,
        name: 'IdCard',
        component: () => import('@/pages/other/idcard/index.vue'),
        meta: {
          title: 'idcard',
          icon: 'i-carbon-id-management'
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
      },
      {
        path: `${BASE_URL}/sign`,
        name: 'Sign',
        component: () => import('@/pages/other/sign/index.vue'),
        meta: {
          title: '签字板',
          icon: 'i-carbon-contour-draw'
        }
      },
      {
        path: `${BASE_URL}/day`,
        name: 'DayJS',
        component: () => import('@/pages/other/dayjs/index.vue'),
        meta: {
          title: 'dayjs',
          icon: 'i-carbon-event-schedule'
        }
      },
      {
        path: `${BASE_URL}/key`,
        name: 'BRKey',
        component: () => import('@/pages/other/browser-key/index.vue'),
        meta: {
          title: '浏览器唯一标识',
          icon: 'i-carbon-ibm-cloud-key-protect'
        }
      },
      {
        path: `${BASE_URL}/lodash`,
        name: 'Lodash',
        component: () => import('@/pages/other/lodash/index.vue'),
        meta: {
          title: 'LODASH常用',
          icon: 'i-carbon-ibm-toolchain'
        }
      }
    ]
  }
]
