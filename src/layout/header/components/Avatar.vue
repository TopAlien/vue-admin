<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { message } from 'ant-design-vue'
  import useUserInfoStore from '@/store/user-info.js'

  const router = useRouter()
  const route = useRoute()
  const userInfo = useUserInfoStore()

  const handleLogout = () => {
    userInfo.logout()
    message.success('退出成功')
    router.push(`/login?redirect=${route.fullPath}`)
  }
</script>
<template>
  <div class="mr16px cursor-pointer">
    <a-dropdown>
      <a
        class="ant-dropdown-link flex items-center"
        @click.prevent
      >
        <a-avatar
          shape="square"
          :style="{ backgroundColor: '#e6f4ff', color: 'black' }"
        >
          {{ userInfo.userInfo.name }}
        </a-avatar>
        <i class="i-carbon-chevron-down down_icon" />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="handleLogout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped lang="less">
  .down_icon {
    display: block;
    color: @primary-color;
  }
</style>
