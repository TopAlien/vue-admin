<script setup>
  import { reactive, ref, watch, provide } from 'vue'
  import { message, Watermark } from 'ant-design-vue'
  import Child from './components/child.vue'
  import SlotProp from './components/slot_prop.vue'
  import useCounterStore from '@/store/counter.js'

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

  const counter = ref(0)
  watch(counter, (newVal, oldVal) => {
    console.log('-> newVal, oldVal', newVal, oldVal)
  })

  const save = () => {
    console.log('save')
  }

  const sex = ref('male')
  const handleChange = () => {
    const now = Date.now()
    sex.value = `修改性别${now}`
  }
  provide('sex', sex)
</script>

<template>
  <Watermark content="哇咔咔">
    <div>
      <a-card
        title="作用域插槽 - 应用示例"
        :bordered="false"
      >
        <SlotProp>
          <template v-slot="{ user, age, userInfo }">
            <a-button type="primary">{{ age }} - {{ user }} - {{ userInfo }}</a-button>
          </template>
        </SlotProp>
      </a-card>

      <a-divider />

      <a-button loading>原loading</a-button>
      <a-button
        loading
        type="primary"
      >
        原loading
      </a-button>

      <a-button
        v-loading
        type="primary"
        @click="save"
      >
        v-loading 点击1
      </a-button>
      <a-button
        v-loading
        @click="save"
      >
        v-loading 点击2
      </a-button>
      <a-button
        v-loading="2500"
        type="primary"
        @click="save"
      >
        v-loading 自定义时间
      </a-button>

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

    <div style="border: 1px solid #cccccc">
      <h1>provide, inject</h1>
      <h3>provide初始数据 {{ sex }}</h3>
      <a-button
        @click="handleChange"
        type="primary"
      >
        顶级修改原数据
      </a-button>
      <Child />
    </div>
  </Watermark>
</template>
