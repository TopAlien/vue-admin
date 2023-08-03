<script setup>
  import { useSettingStore } from '@/store'
  const setting = useSettingStore()
</script>

<template>
  <a-tooltip color="white">
    <template v-slot:title>
      <span style="color: black">锁屏</span>
    </template>
    <i
      class="block i-carbon-locked cursor-pointer"
      @click="setting.toggleLock"
    />
  </a-tooltip>
</template>
