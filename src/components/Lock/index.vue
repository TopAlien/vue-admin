<script setup>
  import { useSettingStore } from '@/store'

  const setting = useSettingStore()
</script>

<template>
  <div class="lock">
    <a-button
      class="flex items-center"
      type="primary"
      @click="setting.toggleLock"
    >
      <template v-slot:icon>
        <i class="i-carbon-unlocked inline-block" />
      </template>
      解锁
    </a-button>
  </div>
</template>

<style scoped lang="less">
  .lock {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    position: fixed;
    background-color: #d2e5ff;
    z-index: 9999;
  }
</style>
