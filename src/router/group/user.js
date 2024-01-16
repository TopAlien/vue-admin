import Layout from '@/layout/index.vue'

const BASE_URL = '/user'

export default [
  {
    path: BASE_URL,
    component: Layout,
    name: 'User',
    meta: {
      title: '用户',
      isGroup: true,
      icon: 'i-carbon-user-multiple'
    },
    children: [
      {
        path: `${BASE_URL}/list`,
        name: 'User_List',
        component: () => import('@/pages/user/list/index.vue'),
        meta: {
          title: '用户列表',
          icon: 'i-carbon-user-profile'
        }
      },
      {
        path: `${BASE_URL}/role`,
        name: 'User_Role',
        component: () => import('@/pages/user/role/index.vue'),
        meta: {
          title: '角色列表',
          icon: 'i-carbon-user-role'
        }
      }
    ]
  }
]
