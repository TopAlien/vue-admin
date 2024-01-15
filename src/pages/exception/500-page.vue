<template>
  <div class="flex justify-center items-center">
    <a-result
      status="500"
      title="500"
      sub-title="抱歉，服务器出了点问题～"
    >
      <template #extra>
        <router-link to="/">
          <a-button type="primary">返回首页</a-button>
        </router-link>
      </template>
    </a-result>
  </div>
</template>
