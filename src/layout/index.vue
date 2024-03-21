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

      <div
        class="content_wrap"
        v-scrollbar
      >
        <div class="scroll_content">
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
    background: @main-bg;
  }

  .scroll_content {
    //height: calc(100vh - @header-height);
    //min-width: @scroll-content-min-width;
    min-height: calc(100vh - 84px);
    box-sizing: border-box;
    margin: 12px;
    padding: 12px;
    overflow: auto;
    background-color: white;
    border-radius: 6px;
  }
</style>
