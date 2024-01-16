import Layout from '@/layout/index.vue'

const BASE_URL = '/com'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Com',
    meta: {
      title: '组件',
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: `${BASE_URL}/list-1`,
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
      },
      {
        path: `${BASE_URL}/modal`,
        name: 'Modal',
        component: () => import('@/pages/com/modal/index.vue'),
        meta: {
          title: 'Modal',
          icon: 'i-carbon-model-alt'
        }
      },
      {
        path: `${BASE_URL}/auto`,
        name: 'BtnAuth',
        component: () => import('@/pages/com/auth/index.vue'),
        meta: {
          title: '按钮权限',
          icon: 'i-carbon-model-alt'
        }
      },
      {
        path: `${BASE_URL}/mark`,
        name: 'TextMark',
        component: () => import('@/pages/com/mark-keyword/index.vue'),
        meta: {
          title: '关键词高亮',
          icon: 'i-carbon-dot-mark'
        }
      },
      {
        path: `${BASE_URL}/ellipsis`,
        name: 'TextEllipsis',
        component: () => import('@/pages/com/text-ellipsis/index.vue'),
        meta: {
          title: '文本溢出',
          icon: 'i-carbon-text-footnote'
        }
      },
      {
        path: `${BASE_URL}/tabs`,
        name: 'RadiusTabs',
        component: () => import('@/pages/com/radius-tabs/index.vue'),
        meta: {
          title: '反圆角Tabs',
          icon: 'i-carbon-text-footnote'
        }
      }
    ]
  }
]
