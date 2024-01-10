export const typeEnum = {
  '图文': 'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image',
  '横版短视频':
    'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image',
  '竖版短视频':
    'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image'
}

/// 通过name匹配的, 其他信息可传入后覆盖, 更改为Apifox云端mock获取
export const adminRoutes = [
  {
    id: 1,
    name: 'Chart',
    path: '/chart',
    title: '图标',
    status: 1,
    children: [
      {
        id: 2,
        title: '柱状图',
        path: '/chart/bar',
        name: 'Chart_Bar',
        status: 1
      },
      {
        id: 3,
        title: '折线图',
        path: '/chart/line',
        name: 'Chart_Line',
        status: 0
      },
      {
        id: 4,
        title: '饼图',
        path: '/chart/pie',
        name: 'Chart2_Pie',
        status: 1
      }
    ]
  },
  {
    id: 5,
    name: 'Print',
    path: '/print',
    title: '打印',
    status: 1,
    children: [
      {
        id: 6,
        status: 1,
        title: '打印列表',
        name: 'Print-List',
        path: '/print/list'
      }
    ]
  }
]
