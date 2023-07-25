<script setup>
  import FullScreen from '@/components/FullScreen/index.vue'
</script>

<template>
  <div class="content_header">
    <FullScreen />
    <div>
      header avatar
    </div>
  </div>
</template>

<style scoped lang="less">
  .content_header {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
    height: @header-height;
    box-shadow: @box-shadow;
  }
</style>
