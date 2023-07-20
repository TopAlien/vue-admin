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
- unocss
- vueuse
- ant-design-vue@4.x - zh-cn
- overlayscrollbars自定义滚动条（自定义指令）- 未添加- 暂时不支持vue3


### import.meta.env 访问环境变量，自定义 VITE_ 开头
