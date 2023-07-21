<script setup>
  import { ref } from 'vue'
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
  import { Watermark } from 'ant-design-vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import { userCounterStore, useSettingStore } from '@/store'

  const counterStore = userCounterStore()

  const open = ref(false)

  const setting = useSettingStore()
</script>

<template>
  <Watermark content="哇咔咔">
    <div>
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
    <HelloWorld msg="Vite + Vue overlayscrollbars" />
    <a-datePicker />
    <a-button
      type="primary"
      @click="setting.toggleCollapsed()"
    >
      13
      <MenuUnfoldOutlined v-if="setting.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-modal
      v-model:open="open"
      title="Basic Modal"
    >
      asdasd
    </a-modal>
  </Watermark>
</template>
