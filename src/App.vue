<script setup>
  import ConfigProvider from '@/components/ConfigProvider/index.vue'
  import Lock from '@/components/Lock/index.vue'
  import useSettingStore from '@/store/setting.js'

  const setting = useSettingStore()
</script>

<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#2546f0'
      }
    }"
  >
    <Lock v-if="setting.lockScreen" />
    <router-view />
  </ConfigProvider>
</template>
