<script setup></script>

<template>
  <a-button>常显</a-button>
  <a-button
    v-auth.user="'api/user/detail'"
    type="primary"
  >
    可见1
  </a-button>

  <a-button
    v-auth.user="['userList', 'apiUserList']"
    type="primary"
  >
    不可见
  </a-button>

  <a-button
    v-auth.user.setting.404="['apiAuthAdd', 'apiUserList', 'api/exception/add']"
    type="primary"
  >
    可见2
  </a-button>

  <a-button
    v-auth.user.setting="['apiAuthAdd', 'api/auth/edit']"
    type="primary"
  >
   可见3
  </a-button>

  <a-button
    v-auth="{ user: 'apiUserList', setting: 'apiAuthAdd' }"
    type="primary"
  >
    不可见
  </a-button>

  <a-button
    v-auth="{ user: ['api/user/list1231'], setting: ['apiAuthAdd', 'api/auth/edit123'], 404: 'api/exception/add' }"
    type="primary"
  >
    可见4
  </a-button>
</template>
