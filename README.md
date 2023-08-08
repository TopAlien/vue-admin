## 运行

### 1、yarn install

### 2、yarn dev

## 构建

### 1、build:dev 打包开发环境

### 2、build:test 打包测试环境

### 3、build:prod 打包正式环境

... 自定义可以增加 .env.[mode]
... package.json scripts 对应 --mode [mode]

### 技术栈

- less css预处理器, 变量
- pinia
- vite@4
- vue@3
- vue-router@4
- unocss - safelist加载动态icon class
- vueuse
- ant-design-vue@4.x - zh-cn 组件二次封装slot, attrs透传
- smooth-scrollbar自定义滚动条（自定义指令)

### import.meta.env 访问环境变量，自定义 VITE\_ 开头
![img.png](public/img.png)
![img.png](public/img1.png)
![img.png](public/img2.png)
![img.png](public/img3.png)

### 路由配置

```js
const BASE_URL = '/other'

[
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
