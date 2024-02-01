<script setup>
  import { ref } from 'vue'

  const model = ref({})
</script>

<template>
  <SearchBox
    title="查询菜单"
    :model="model"
  >

  </SearchBox>
</template>
