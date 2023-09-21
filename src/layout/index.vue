<script setup>
  import LayoutSide from './sider/index.vue'
  import Header from '@/layout/header/index.vue'

  import { useSettingStore } from '@/store/index.js'
  const setting = useSettingStore()
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
        <a-spin :spinning="setting.contentSpin">
          <router-view />
        </a-spin>
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

  :deep(.scroll_content .ant-spin-dot.ant-spin-dot-spin) {
    top: 40vh;
  }
</style>
