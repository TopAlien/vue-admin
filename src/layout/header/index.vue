<script setup>
  import Avatar from './components/Avatar.vue'
  import Lock from './components/Lock.vue'

  import config from '@/config/index.js'
  import Logo from '@/layout/sider/components/Logo.vue'
  import { useSettingStore } from '@/store/index.js'

  const setting = useSettingStore()
</script>

<template>
  <div class="content_header">
    <div class="flex">
      <div class="logo_wrap w64px">
        <Logo />
      </div>

      <div :class="['header_title', setting.collapsed ? 'close_menu' : 'open_menu']">
        {{ config.title }}
      </div>
    </div>

    <div class="flex items-center gap16px">
      <Lock />
      <Avatar />
    </div>
  </div>
</template>

<style scoped lang="less">
  .content_header {
    display: flex;
    justify-content: space-between;
    height: @header-height;
    box-shadow: @box-shadow;
  }

  .logo_wrap {
    height: @header-height;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(35, 39, 45);
  }

  .header_title {
    width: calc(@menu-width - 1px);
    position: relative;
    height: @header-height;
    line-height: @header-height;
    text-align: center;
    user-select: none;

    // 补齐流白，可以变为红色看看
    &.open_menu:after {
      position: absolute;
      right: -3px;
      bottom: -3px;
      display: block;
      content: '';
      width: 5px;
      height: 1px;
      background-color: rgba(5, 5, 5, 0.06);
      transform: rotate(90deg);
    }
  }
</style>
