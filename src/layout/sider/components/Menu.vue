<script setup>
  import { watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useSideMenuStore, useSettingStore } from '@/store/index.js'
  import config from '@/config/index.js'

  const setting = useSettingStore()
  const sideMenu = useSideMenuStore()

  const router = useRouter()
  const handleClickMenu = ({ key }) => {
    router.push({ path: key })
  }

  const route = useRoute()
  watch(
    route,
    (newRoute) => {
      setting.changeMenu(Array.from(new Set([...setting.openKeys, newRoute.matched[1]?.path])), [newRoute.fullPath])
    },
    { immediate: true }
  )
</script>

<template>
  <div :class="['menu', setting.collapsed ? 'collapsed_menu' : '']">
    <div class="menu_header">
      {{ config.title }}
    </div>
    <a-menu
      :key="sideMenu.menuKey"
      v-scrollbar
      class="menu_cus"
      mode="inline"
      v-model:selectedKeys="setting.selectedKeys"
      :open-keys="setting.openKeys"
      :inline-collapsed="setting.collapsed"
      :items="sideMenu.menus"
      @click="handleClickMenu"
    />
  </div>
</template>

<style scoped lang="less">
  .menu {
    &_header {
      width: calc(100% - 1px);
      position: relative;
      height: @header-height;
      line-height: @header-height;
      text-align: center;
      box-shadow: @box-shadow;
      user-select: none;

      // 补齐流白，可以变为红色看看
      &:after {
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

    &_cus {
      width: @menu-width;
      overflow: auto;
      height: calc(100vh - @header-height - 4px);

      // 为了漏出头部阴影
      margin-top: 4px;
    }

    &.collapsed_menu .menu_cus {
      width: 0;
    }

    &.collapsed_menu .menu_header {
      width: 0;
      display: none;
    }
  }
</style>
