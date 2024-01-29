<script setup>
  import { useRouter } from 'vue-router'
  import useSettingStore from '@/store/setting.js'
  import useSideMenuStore from '@/store/side-menu.js'

  const sideMenu = useSideMenuStore()

  const router = useRouter()
  const handleClickMenu = ({ key }) => {
    router.push({ path: key })
  }

  const setting = useSettingStore()
  const openChange = (openKeys) => {
    setting.changeMenuHighlight(openKeys, setting.selectedKeys)
  }
</script>

<template>
  <div
    v-show="sideMenu.onlyMenu"
    v-scrollbar
    :class="['menu', setting.collapsed ? 'collapsed_menu' : '']"
  >
    <a-menu
      class="menu_cus"
      mode="inline"
      v-model:selectedKeys="setting.selectedKeys"
      :open-keys="setting.openKeys"
      :inline-collapsed="setting.collapsed"
      :items="sideMenu.menus"
      @click="handleClickMenu"
      @openChange="openChange"
    />
  </div>
</template>

<style scoped lang="less">
  .menu {
    overflow: auto;
    height: calc(100vh - @header-height - 4px);

    &_cus {
      width: @menu-width;

      // 为了漏出头部阴影
      margin-top: 4px;
    }

    &.collapsed_menu .menu_cus {
      width: 0;
    }
  }
</style>
