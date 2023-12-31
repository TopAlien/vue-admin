<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import useSettingStore from '@/store/setting.js'
  import useSideMenuStore from '@/store/side-menu.js'
  import { getTabIndex, getTabMenu } from '@/layout/sider/components/util.js'
  import { listenerRouteChange } from '@/utils/router-listener.js'

  const router = useRouter()
  const setting = useSettingStore()

  const handleTab = (it, isHighlight) => {
    if (isHighlight) return
    setting.changeMenu([], [])
    router.push(it.path)

    if (setting.collapsed) {
      setting.toggleCollapsed()
    }
  }

  const sideMenu = useSideMenuStore()
  const tabMenu = getTabMenu(router.getRoutes() || [])
  const curTabIndex = ref(0)

  listenerRouteChange(({ path, matched }) => {
    // 需要反推，防止回退操作显示错误
    curTabIndex.value = getTabIndex(tabMenu, { matched })

    /// 展开menu, 高亮第一个菜单
    setting.changeMenu(Array.from(new Set([...setting.openKeys, matched[1]?.path])), [path])

    // fix 浏览器菜单回退时 side数据更新;取缓存
    curTabIndex.value >= 0 && sideMenu.changeSide(tabMenu[curTabIndex.value])
  })
</script>

<template>
  <div class="tabs_wrap">
    <div
      v-scrollbar
      class="column_tabs"
    >
      <div
        :class="{ tab_item: true, active_tab: curTabIndex === index }"
        v-for="(it, index) in tabMenu"
        :key="it"
        @click="handleTab(it, curTabIndex === index)"
      >
        <i :class="['block', it.meta.icon]" />
        <span class="column_title">{{ it.meta.title }}</span>
      </div>
    </div>
    <div
      v-if="sideMenu.onlyMenu"
      class="collapsed_btn"
      @click="setting.toggleCollapsed"
    >
      <i
        :class="[
          'block ma',
          setting.collapsed ? 'i-carbon-side-panel-open-filled' : 'i-carbon-side-panel-close-filled'
        ]"
      />
    </div>
    <div
      v-else
      class="collapsed_btn"
    />
  </div>
</template>

<style scoped lang="less">
  .collapsed_btn {
    width: 100%;
    height: 45px;
    text-align: center;
    background-color: rgb(35, 39, 45);
    color: white;
    cursor: pointer;
  }

  .column_tabs {
    height: calc(100vh - @header-height - 45px);
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

  .column_title {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    padding-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
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
