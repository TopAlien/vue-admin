<script setup>
  import { ref } from 'vue'
  import { message } from 'ant-design-vue'
  import {
    DashboardOutlined,
    ConsoleSqlOutlined,
    HddOutlined,
    LayoutOutlined,
    ShopOutlined,
    LineOutlined,
    BoldOutlined,
    SettingOutlined,
    BehanceOutlined,
    OneToOneOutlined
  } from '@ant-design/icons-vue'
  import Logo from './logo.vue'

  const tabs = [
    {
      title: '首页',
      icon: DashboardOutlined
    },
    {
      title: 'GPT',
      icon: ConsoleSqlOutlined
    },
    {
      title: '组件',
      icon: HddOutlined
    },
    {
      title: '其他',
      icon: OneToOneOutlined
    },
    {
      title: '操作',
      icon: BehanceOutlined
    },
    {
      title: '模板',
      icon: LayoutOutlined
    },
    {
      title: '配置',
      icon: SettingOutlined
    },
    {
      title: '单栏',
      icon: LineOutlined
    },
    {
      title: '商品',
      icon: ShopOutlined
    },
    {
      title: '门户',
      icon: BoldOutlined
    }
  ]

  const curTabIndex = ref(0)
  const handleTab = ({ title }, index) => {
    curTabIndex.value = index
    console.log(title, index)
    message.info(`this is ${index} - ${title}`)
  }
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
        v-for="(it, index) in tabs"
        :key="it"
        @click="handleTab(it, index)"
      >
        <component :is="it.icon" />
        <span class="pt2px">{{ it.title }}</span>
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
