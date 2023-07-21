import Layout from '@/layout/index.vue'

export default [
  {
    path: '/other',
    component: Layout,
    name: 'Other',
    redirect: '/other/list',
    meta: {
      title: '门户',
      isGroup: true,
      icon: 'i-carbon-location-heart'
    },
    children: [
      {
        path: '/other/list',
        name: 'OtherList',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: {
          title: '门户-2'
        }
      },
      {
        path: '/other/list1',
        name: 'OtherList1',
        component: () => import('@/pages/test/test2.vue'),
        meta: {
          title: '门户-1'
        }
      }
    ]
  }
]
