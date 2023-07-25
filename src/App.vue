<script setup>
  import ConfigProvider from '@/components/ConfigProvider/index.vue'
  import Lock from '@/components/Lock/index.vue'

  import { useSettingStore } from '@/store'
  const setting = useSettingStore()
</script>

<template>
  <ConfigProvider>
    <Lock v-if="setting.lockScreen" />

    <router-view />
  </ConfigProvider>
</template>
