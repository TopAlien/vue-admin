<script setup>
  import { reactive, h } from 'vue'
  import config from '@/config/index.js'
  import { HomeOutlined, SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

  const items = [
    {
      label: 'Navigation One',
      key: 'sub1',
      icon: () => h(HomeOutlined),
      children: [
        {
          label: 'Option 1',
          key: '1'
        },
        {
          label: 'Option 2',
          key: '2'
        },
        {
          label: 'Option 3',
          key: '3'
        },
        {
          label: 'Option 4',
          key: '4'
        }
      ]
    },
    {
      label: 'Navigation Two',
      key: 'sub2',
      icon: () => h(SearchOutlined),
      children: [
        {
          label: 'Option 5',
          key: '5'
        },
        {
          label: 'Option 6',
          key: '6'
        },
        {
          label: 'Submenu',
          key: 'sub3',
          icon: null,
          children: [
            {
              label: 'Option 7',
              key: '7'
            },
            {
              label: 'Option 8',
              key: '8'
            }
          ]
        }
      ]
    },
    {
      label: 'Navigation Three',
      key: 'sub4',
      icon: () => h(MenuUnfoldOutlined),
      children: [
        {
          label: 'Option 9',
          key: '9'
        },
        {
          label: 'Option 10',
          key: '10'
        },
        {
          label: 'Option 11',
          key: '11'
        },
        {
          label: 'Option 12',
          key: '121'
        },
        {
          label: 'Option 9',
          key: '91'
        },
        {
          label: 'Option 10',
          key: '101'
        },
        {
          label: 'Option 11',
          key: '111'
        },
        {
          label: 'Option 12',
          key: '121'
        }
      ]
    }
  ]

  const state = reactive({
    openKeys: ['sub1'],
    selectedKeys: []
  })
</script>

<template>
  <div class="menu">
    <div class="menu_header">
      {{ config.title }}
    </div>
    <a-menu
      v-scrollbar
      class="menu_cus"
      mode="inline"
      v-model:selectedKeys="state.selectedKeys"
      :open-keys="state.openKeys"
      :items="items"
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
  }
</style>
