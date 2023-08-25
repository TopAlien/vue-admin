import Layout from '@/layout/index.vue'

const BASE_URL = '/chart'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Chart',
    redirect: `${BASE_URL}/bar`,
    meta: {
      title: '图表',
      isGroup: true,
      icon: 'i-carbon-chart-combo'
    },
    children: [
      {
        path: `${BASE_URL}/bar`,
        name: 'Chart_Bar',
        component: () => import('@/pages/charts/bar/index.vue'),
        meta: {
          title: '柱状图',
          icon: 'i-carbon-chart-bar'
        }
      },
      {
        path: `${BASE_URL}/line`,
        name: 'Chart_Line',
        component: () => import('@/pages/charts/line/index.vue'),
        meta: {
          title: '折线图',
          icon: 'i-carbon-chart-line'
        }
      },
      {
        path: `${BASE_URL}/pie`,
        name: 'Chart_Pie',
        component: () => import('@/pages/charts/pie/index.vue'),
        meta: {
          title: '饼图',
          icon: 'i-carbon-chart-pie'
        }
      },
      {
        path: `${BASE_URL}/column`,
        name: 'Chart2_Pie',
        component: () => import('@/pages/charts/g2-column/index.vue'),
        meta: {
          title: 'G2-堆叠',
          icon: 'i-carbon-chart-pie'
        }
      }
    ]
  }
]
