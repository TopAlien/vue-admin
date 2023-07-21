<script setup>
  import { ref, watch } from 'vue'
  import Logo from './Logo.vue'
  import { DashboardOutlined } from '@ant-design/icons-vue'
  import { useSideMenuStore } from '@/store/index.js'

  import { useRouter, useRoute } from 'vue-router'
  import { getTabIndex, getTabMenu } from '@/layout/sider/components/util.js'

  const router = useRouter()
  const sideMenu = useSideMenuStore()
  const handleTab = (it) => {
    sideMenu.changeSide(it)
    router.push({ path: it.path })
  }

  const tabMenu = getTabMenu(router.getRoutes() || [])
  const curTabIndex = ref(0)

  const route = useRoute()
  watch(
    route,
    (newRoute) => {
      curTabIndex.value = getTabIndex(tabMenu, newRoute || {})
    },
    { immediate: true }
  )

  /// init
  sideMenu.changeSide(tabMenu[curTabIndex.value])
</script>

<template>
  <div class="tabs_wrap">
    <div class="logo_wrap">
      <Logo />
    </div>
    <div
      v-scrollbar
      class="column_tabs"
    >
      <div
        :class="{ tab_item: true, active_tab: curTabIndex === index }"
        v-for="(it, index) in tabMenu"
        :key="it"
        @click="handleTab(it)"
      >
        <DashboardOutlined />
        <span class="pt2px">{{ it.meta.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .logo_wrap {
    height: @header-height;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(35, 39, 45);
  }

  .column_tabs {
    height: calc(100vh - @header-height);
    width: 64px;
    overflow-y: auto;
    background-color: rgb(35, 39, 45);

    & .tab_item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 54px;
      height: 54px;
      color: white;
      margin: 5px auto 10px;
      font-size: 14px;
      cursor: pointer;

      &.active_tab,
      &:hover {
        background-color: @primary-color;
        border-radius: 5px;
      }
    }
  }
</style>

<style>
  .column_tabs .scrollbar-track-y,
  .column_tabs .scrollbar-thumb.scrollbar-thumb-y {
    width: 2px !important;
  }

  .column_tabs .scrollbar-thumb {
    background: #cdd0d6;
  }
</style>
