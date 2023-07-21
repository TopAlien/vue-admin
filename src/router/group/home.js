import Layout from '@/layout/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    name: 'Base',
    redirect: '/home',
    meta: {
      title: '首页',
      isGroup: true,
      icon: 'i-carbon-home'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]
