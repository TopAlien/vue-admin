<script setup>
  import { ref } from 'vue'
  import RadiusTab from '@/components/RadiusTabs/index.vue'

  const activeKey = ref('2')
</script>

<template>
  <div class="header_title">反圆角Tabs</div>
  <RadiusTab v-model:activeKey="activeKey">
    <a-tab-pane
      key="1"
      tab="Tab 1"
    >
      Content of Tab Pane 1
    </a-tab-pane>
    <a-tab-pane
      key="2"
      tab="Tab 2"
    >
      Content of Tab Pane 2
    </a-tab-pane>
    <a-tab-pane
      key="3"
      tab="Tab 3"
    >
      Content of Tab Pane 3
    </a-tab-pane>
  </RadiusTab>
</template>
