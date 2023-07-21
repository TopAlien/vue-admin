<script setup>
  import ConfigProvider from '@/components/ConfigProvider/index.vue'
  import DynamicIcons from '@/components/DynamicIcons.vue'
</script>

<template>
  <ConfigProvider>
    <DynamicIcons />

    <router-view />
  </ConfigProvider>
</template>
