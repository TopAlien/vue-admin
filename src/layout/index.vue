<script setup>
  import LayoutSide from './sider/index.vue'
  import Header from '@/layout/header.vue'
</script>

<template>
  <div class="flex">
    <div>
      <LayoutSide />
    </div>

    <div class="content_wrap">
      <Header />

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
    height: 100vh;
    overflow: auto;
  }

  .scroll_content {
    height: calc(100vh - @header-height);
    box-sizing: border-box;
    padding: 16px;
    overflow: auto;
  }
</style>
