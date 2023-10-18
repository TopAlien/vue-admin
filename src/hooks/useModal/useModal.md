### 示例

```js
const modal = useModal({ title: '你好', width: '800px' })
const handleFormModal = () => {
  modal.open(FormMenu, {
    id: 1,
    limit: 10,
    /// 对应FormMenu组件的ok，函数名称固定
    ok: (val) => {
      console.log('=>(List.vue:61) val', val)
      console.log('操作了ok')
    }
  })
}
```

### FormMenu 组件props

```js
const props = defineProps({
  id: {
    type: Number
  },
  limit: {
    type: Number
  },
  ok: {
    type: Function
  },
  cancel: {
    type: Function
  }
})

// 函数
const ok = (val) => {
  props.ok && props.ok(val)
}

const handleCancel = () => {
  props.cancel && props.cancel()
}
```
