<script setup>
  import { useSettingStore } from '@/store'
  const setting = useSettingStore()
</script>

<template>
  <i
    class="block i-carbon-locked cursor-pointer"
    @click="setting.toggleLock"
  />
</template>
