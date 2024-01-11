<script setup></script>

<template>
  <a-tabs
    :bind="$attrs"
    type="card"
  >
    <slot />
  </a-tabs>
</template>

<style scoped lang="less">
  :deep(.ant-tabs-nav-list) {
    background-color: #f5f5f5;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  :deep(.ant-tabs-tab) {
    margin-left: 0 !important;
    background: transparent !important;
    border-width: 0 !important;
    transition: none !important;
  }

  :deep(.ant-tabs-tab.ant-tabs-tab-active) {
    position: relative;
    background: white !important;
    box-shadow:
      12px 12px 0 0 #ffffff,
      -12px 12px 0 0 #ffffff;
  }

  :deep(.ant-tabs-tab.ant-tabs-tab-active)::after {
    content: '';
    position: absolute;
    right: -12px;
    bottom: 0;
    width: 12px;
    height: 38px;
    background: #f5f5f5;
    border-radius: 0 0 0 8px;
  }

  :deep(.ant-tabs-tab.ant-tabs-tab-active)::before {
    content: '';
    position: absolute;
    left: -12px;
    bottom: 0;
    width: 12px;
    height: 38px;
    background: #f5f5f5;
    border-radius: 0 0 8px 0;
  }
</style>
