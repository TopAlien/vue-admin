const typeEnum = {
  img: 'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image',
  hVideo:
    'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image',
  vVideo:
    'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image'
}

export const tableData = Array.from({ length: 100 }, (it, index) => {
  return {
    no: index * 11,
    name: `DXXSIV-${index}`,
    type: index % 2 === 0 ? '图文' : '横版短视频',
    icon: index % 2 === 0 ? typeEnum.img : typeEnum.hVideo,
    fs: index % 2 === 0 ? '人工筛选' : '规则筛选',
    num: index,
    createTime: '1974-02-17 03:54:51',
    status: index % 2 === 0 ? '已下线' : '已上线'
  }
})

/// 通过name匹配的, 其他信息可传入后覆盖
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
        status: 1,
      },
      {
        id: 3,
        title: '折线图',
        path: '/chart/line',
        name: 'Chart_Line',
        status: 0,
      },
      {
        id: 4,
        title: '饼图',
        path: '/chart/pie',
        name: 'Chart2_Pie',
        status: 1,
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
