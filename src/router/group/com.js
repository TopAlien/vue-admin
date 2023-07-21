import Layout from '@/layout/index.vue'

export default [
  {
    path: '/com',
    component: Layout,
    name: 'Com',
    redirect: '/com/list',
    meta: {
      title: '组件',
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: '/com/list',
        name: 'List',
        meta: {
          title: '列表',
          icon: 'i-carbon-list'
        },
        redirect: '/com/list/list2',
        children: [
          {
            path: '/com/list/list2',
            name: 'List2',
            component: () => import('@/pages/test/list.vue'),
            meta: {
              title: '列表2'
            }
          },
          {
            path: '/com/list/list3',
            name: 'List3',
            component: () => import('@/pages/test/test2.vue'),
            meta: {
              title: '列表3'
            }
          }
        ]
      },
      {
        path: '/com/list-1',
        name: 'List-1',
        meta: {
          title: '列表-1',
          icon: 'i-carbon-list-boxes'
        },
        redirect: '/com/list-1/list2-1',
        children: [
          {
            path: '/com/list-1/list2-1',
            name: 'List2-1',
            component: () => import('@/pages/test/test2.vue'),
            meta: {
              title: '列表2-1'
            }
          },
          {
            path: '/com/list-1/list3-1',
            name: 'List3-1',
            component: () => import('@/pages/error-page/404.vue'),
            meta: {
              title: '列表3-1'
            }
          }
        ]
      }
    ]
  }
]
