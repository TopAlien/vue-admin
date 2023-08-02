<script setup>
  import LayoutSide from './sider/index.vue'
  import Header from '@/layout/header/index.vue'
</script>

<template>
  <Header />
  <div class="flex">
    <div>
      <LayoutSide />
    </div>

    <div class="content_wrap">
      <div
        v-scrollbar
        class="scroll_content"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .content_wrap {
    flex: 1;
    height: calc(100vh - @header-height);
    overflow: auto;
  }

  .scroll_content {
    height: calc(100vh - @header-height);
    min-width: @scroll-content-min-width;
    box-sizing: border-box;
    padding: 16px;
    overflow: auto;
  }
</style>
