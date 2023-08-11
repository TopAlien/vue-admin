<script setup>
  import { reactive, ref, watch } from 'vue'
  import { message, Watermark } from 'ant-design-vue'
  import { useCounterStore } from '@/store'

  const counterStore = useCounterStore()

  const open = ref(false)

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
</script>

<template>
  <Watermark content="哇咔咔">
    <div>
      <a-button
        type="primary"
        @click="onWatch"
      >
        watch
      </a-button>
      <h1>{{ counterStore.count }}</h1>
      <a-button
        type="primary"
        class="ma20px"
        @click="counterStore.increment"
      >
        overlayscrollbars
      </a-button>
    </div>

    <a-button
      @click="() => (open = true)"
      type="primary"
    >
      modal
    </a-button>
    <div
      v-scrollbar
      class="h400px overflow-auto"
    >
      <div class="h1000px w9000px">1237912379</div>
    </div>
    <a-datePicker />
    <a-modal
      v-model:open="open"
      title="Basic Modal"
    >
      asdasd
    </a-modal>
  </Watermark>
</template>
