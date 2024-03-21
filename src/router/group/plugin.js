import Layout from '@/layout/index.vue'

const BASE_URL = '/plugin'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Plugin',
    meta: {
      title: '插件',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: `${BASE_URL}/check`,
        name: 'PluginList',
        component: () => import('@/pages/plugin/check-card/index.vue'),
        meta: {
          title: 'CheckCard',
          icon: 'i-carbon-data-check'
        }
      },
      {
        path: `${BASE_URL}/watermark`,
        name: 'Watermark',
        component: () => import('@/pages/plugin/watermark/index.vue'),
        meta: {
          title: '水印',
          icon: 'i-carbon-encryption'
        }
      },
      {
        path: `${BASE_URL}/idcard`,
        name: 'IdCard',
        component: () => import('@/pages/plugin/idcard/index.vue'),
        meta: {
          title: 'idcard',
          icon: 'i-carbon-id-management'
        }
      },
      {
        path: `${BASE_URL}/icons`,
        name: 'Icons',
        component: () => import('@/pages/plugin/icons/index.vue'),
        meta: {
          title: '图标',
          icon: 'i-carbon-ibm-content-services'
        }
      },
      {
        path: `${BASE_URL}/org`,
        name: 'OrgTree',
        component: () => import('@/pages/plugin/org_tree/index.vue'),
        meta: {
          title: 'OrgTree',
          icon: 'i-carbon-decision-tree'
        }
      },
      {
        path: `${BASE_URL}/calendar`,
        name: 'Calendar',
        component: () => import('@/pages/plugin/calendar/index.vue'),
        meta: {
          title: '日历',
          icon: 'i-carbon-calendar'
        }
      },
      {
        path: `${BASE_URL}/sign`,
        name: 'Sign',
        component: () => import('@/pages/plugin/sign/index.vue'),
        meta: {
          title: '签字板',
          icon: 'i-carbon-contour-draw'
        }
      },
      {
        path: `${BASE_URL}/day`,
        name: 'DayJS',
        component: () => import('@/pages/plugin/dayjs/index.vue'),
        meta: {
          title: 'dayjs',
          icon: 'i-carbon-event-schedule'
        }
      },
      {
        path: `${BASE_URL}/key`,
        name: 'BRKey',
        component: () => import('@/pages/plugin/browser-key/index.vue'),
        meta: {
          title: '浏览器唯一标识',
          icon: 'i-carbon-ibm-cloud-key-protect'
        }
      },
      {
        path: `${BASE_URL}/lodash`,
        name: 'Lodash',
        component: () => import('@/pages/plugin/lodash/index.vue'),
        meta: {
          title: 'LODASH常用',
          icon: 'i-carbon-ibm-toolchain'
        }
      },
      {
        path: `${BASE_URL}/zip`,
        name: 'ExportZip',
        component: () => import('@/pages/plugin/zip/index.vue'),
        meta: {
          title: 'Zip',
          icon: 'i-carbon-zip'
        }
      },
      {
        path: `${BASE_URL}/excel`,
        name: 'ExportExcel',
        component: () => import('@/pages/plugin/excel/index.vue'),
        meta: {
          title: 'Excel',
          icon: 'i-carbon-document'
        }
      }
    ]
  }
]
