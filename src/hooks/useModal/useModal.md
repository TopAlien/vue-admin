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

### FormMenu 组件props（弹窗组件 + 弹窗组件按钮）

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

const ok = (val) => {
  // 校验等。。。

  // 这里固定格式
  props.ok && props.ok(val)
}

const handleCancel = () => {
  // 取消函数内部固定格式，暂时无法优化到不用写取消函数
  props.cancel && props.cancel()
}
```

### 弹窗组件底部按钮

```vue
<ModalFooter @confirm="ok" @cancel="() => props.cancel && props.cancel()" />
```
