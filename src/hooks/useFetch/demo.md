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