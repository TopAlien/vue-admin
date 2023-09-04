<script setup>
  import { ColumnTabs, Menu } from '@/layout/sider/index.js'
  import { useSideMenuStore } from '@/store/index.js'

  const sideMenu = useSideMenuStore()
</script>

<template>
  <div class="flex">
    <ColumnTabs />
    <Menu v-show="sideMenu.onlyMenu" />
  </div>
</template>
