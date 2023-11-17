## 运行

### 1、yarn install

### 2、yarn dev

## 构建

### 1、build:dev 打包开发环境

### 2、build:test 打包测试环境

### 3、build:prod 打包正式环境

... 自定义可以增加 .env.[mode]
... package.json scripts 对应 --mode [mode]

### 功能/技术栈

- less css预处理器, 变量
- pinia
- vite@4
- vue@3
- 请求使用原生支持的fetch（vueuse/useFetch hook）useFetch二次封装, 不再使用axios
- vue-router@4
- unocss - safelist加载动态icon class
- vueuse
- ant-design-vue@4.x - zh-cn 组件二次封装slot, attrs透传
- smooth-scrollbar自定义滚动条（自定义指令)
- 可配置右侧content接口请加载动画（如图7），见service/index.js showLoading配置
- 图表库 Echarts-v5
- 图表库 G2-5.0
- 简单易用的打印，局部打印 hiprint，直接预览，导出pdf
- lodash-es版 方便vite tree shake, 减少包体积；所以我们在选择第三方库时，要尽可能使用 ESM 版本，可以提升不少性能！
- 切换页面回到顶部，区域滚动router无效
- Org Tree
- Calendar 日历
- idcard 校验身份证[第二代]合法性，获取身份证详细信息（可15位转18位）
- NProgress 页面切换进度条
- 后端动态路由匹配 config 开启后查看示例
- 基于Modal封装useModal函数式调用
- 浏览器唯一标识，用于游客记录等
- json美化预览/编辑
- 按钮 v-loading（loading动画）自定义指令 - 节流
- 按钮级权限指令 v-auth.[moduleName]

### import.meta.env 访问环境变量，自定义 VITE\_ 开头

### 项目部分截图

![img.png](public/img.png)
![img.png](public/img1.png)
![img.png](public/img2.png)
![img.png](public/img3.png)
![img.png](public/img4.png)
![img5.png](public/img5.png)
![img.png](public/img6.png)
![img7.png](public/img7.png)
![img8.png](public/img8.png)
![img9.png](public/img9.png)
![img10.png](public/img10.png)
![img11.png](public/img11.png)
![img12.png](public/img12.png)

### 路由配置

```js
const BASE_URL = '/other'[
  {
    // path必须写完整的路径，要做跳转匹配
    path: BASE_URL,
    component: Layout,
    name: 'Com',
    redirect: `${BASE_URL}/list-1/list2-1`,
    // icon 为carbon时在，safelist中添加class
    // meta: { icon, hideInMenu, title }
    meta: {
      title: '组件',
      // 需要显示到column tab中的分组
      isGroup: true,
      icon: 'i-carbon-ibm-cloud-transit-gateway'
    },
    children: [
      {
        path: `${BASE_URL}/list-1`,
        redirect: `${BASE_URL}/list-1/list2-1`,
        name: 'List-1',
        meta: {
          title: '列表-1',
          icon: 'i-carbon-list-boxes'
        }
      }
    ]
  }
]
```

### [图表来自](http://ppchart.com/#/) 大赞👍

### [插画](https://undraw.co/illustrations)

### [404插画](https://error404.fun/)

### [打印](https://www.npmjs.com/package/vue-plugin-hiprint)

## 开发经验/优化

1. 避免整体监听对象，会隐式触发deep。分清楚watch({}), 和 watch(() => {}) 使用场景

```js
const watState = reactive({ arr: [], count: 1, str: '123', bo: true })

// watch(watState.str, () => {})
// 原始值不能直接监听，需要用getter函数
// 引用可以直接监听，会隐式创建deep，用到getter函数，需显示deep监听，否则需要整体替换才触发watch 例： watState.arr = []
watch(
  () => watState.arr,
  (newVal, oldVal) => {
    message.success('触发！')
    console.log('-> newVal, oldVal', newVal, oldVal)
  }
)

const onWatch = () => {
  watState.arr = [{ name: 'ealien', age: '123', sex: '1' }]
}

const counter = ref(0)
// 不是原始值不能直接监听吗？啊这...。 别忘了ref访问需要 .value呀。souga
watch(counter, (newVal, oldVal) => {
  console.log('-> newVal, oldVal', newVal, oldVal)
})
```

2. 子组件想知道emit父级到底传没传？

```vue
<!-- 1、父组件 -->
<ModalFooter @confirm="() => {}" />

<!-- 2、ModalFooter 组件 -->
const emit = defineEmits(['confirm', 'cancel'])

<!-- props 在emit前面加on 嘎嘎好使 -->
const props = defineProps({ 
    onConfirm: { type: Function }, 
    onCancel: { type: Function },
})

<!-- 这不就来了嘛，这里直接用来判断就完事了 -->
props.onConfirm
props.onCancel
```
