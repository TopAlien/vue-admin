<script setup></script>
<template>
  <div class="flex justify-center items-center">
    <a-result
      status="404"
      title="404"
      sub-title="抱歉，程序员掘地三尺也没找到此页面～"
    >
      <template #extra>
        <router-link to="/">
          <a-button type="primary">返回首页</a-button>
        </router-link>
      </template>
    </a-result>
  </div>
</template>
