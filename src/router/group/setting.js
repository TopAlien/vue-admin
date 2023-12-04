import Layout from '@/layout/index.vue'

const BASE_URL = '/setting'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'Setting',
    redirect: `${BASE_URL}/menu`,
    meta: {
      title: '设置',
      isGroup: true,
      icon: 'i-carbon-settings'
    },
    children: [
      {
        path: `${BASE_URL}/menu`,
        name: 'Setting_Menu',
        component: () => import('@/pages/setting/menu-enter/index.vue'),
        meta: {
          title: '菜单列表',
          icon: 'i-carbon-list'
        }
      },
      {
        path: `${BASE_URL}/profile`,
        name: 'Setting_Profile',
        component: () => import('@/pages/setting/profile/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'i-carbon-user-data'
        }
      }
    ]
  }
]
