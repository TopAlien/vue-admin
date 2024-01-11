## 可以不使用await, 这样不会阻塞页面

## useFetch 没有对get请求参数做很好的处理（query参数只能手动拼接到url中），所以二次封装了

### 原来get请求url拼接示例
```js
 useFetch('https://www.baidu.com/asd?name=1&age=18').json()
```

### 封装后的get请求参数处理
### 示例1 响应式查询参数
```js
  const inputVal = ref({ id: '1', name: null, age: undefined, as: '' })
  const { data, isFetching, execute } = await useFetch(API_POSTS.photos, {
    params: inputVal
  }).json()
```


### 示例2 响应式查询参数
```js
  const state = reactive({
    page_index: 1,
    page_size: 2,
    id: 1
  })

  const { data, isFetching, execute } = await useFetch(API_POSTS.photos, {
    params: state
  }).json()
```

### 示例3 响应式payload, 使用reactive定义参数；继续执行execute数据会是最新的
```js
  const state = reactive({
    page_index: 1,
    page_size: 2,
    id: 1
  })

  const { data, isFetching, execute } = await useFetch(API_POSTS.photos).post(state).json()
```

### 示例4 payload只初始化一次
```js
  const state = ref({
    page_index: 1,
    page_size: 2,
    id: 1
  })

  const { data, isFetching, execute } = await useFetch(API_POSTS.photos).post({ ...state.value }).json()
```
