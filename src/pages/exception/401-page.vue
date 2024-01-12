<template>
  <div class="flex justify-center items-center">
    <a-result
      status="403"
      title="401"
      sub-title="抱歉，没有权限访问此页面～"
    >
      <template #extra>
        <a-button type="primary">返回首页</a-button>
      </template>
    </a-result>
  </div>
</template>
