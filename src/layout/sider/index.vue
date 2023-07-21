<script setup>
  import { ColumnTabs, Menu } from '@/layout/sider/index.js'
  import { useSideMenuStore } from '@/store/index.js'

  const sideMenu = useSideMenuStore()
</script>

<template>
  <div class="flex">
    <ColumnTabs />
    <Menu v-if="sideMenu.menus[0] && sideMenu.menus[0].children && sideMenu.menus[0].children.length" />
  </div>
</template>
