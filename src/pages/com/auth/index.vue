<script setup></script>

<template>
  <a-button>常显</a-button>
  <a-button
    v-auth.user="'api/user/detail'"
    type="primary"
  >
    用户详情
  </a-button>

  <a-button
    v-auth.user="['userList', 'apiUserList']"
    type="primary"
  >
    v-auth.user="['userList', 'apiUserList']"
  </a-button>

  <a-button
    v-auth.user.setting="['apiAuthAdd', 'apiUserList']"
    type="primary"
  >
    v-auth.setting="['apiAuthAdd', 'apiUserList']"
  </a-button>

  <a-button
    v-auth.user.setting="['apiAuthAdd', 'api/auth/edit']"
    type="primary"
  >
    显示设置中的edit可以显示 v-auth.user.setting="['apiAuthAdd', 'api/auth/edit']"
  </a-button>

  <a-button
    v-auth="{ user: 'apiUserList', setting: 'apiAuthAdd' }"
    type="primary"
  >
    { user: 'apiUserList', setting: 'apiAuthAdd'}
  </a-button>

  <a-button
    v-auth="{ user: ['api/user/list'], setting: ['apiAuthAdd', 'api/auth/edit123'] }"
    type="primary"
  >
    显示{ user: ['api/user/list'], setting: ['apiAuthAdd', 'api/auth/edit'] }
  </a-button>
</template>
