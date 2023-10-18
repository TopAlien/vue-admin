<script setup>
  import { ref } from 'vue'
  import SearchBox from '@/components/SearchBox/index.vue'

  const model = ref({})
</script>

<template>
  <SearchBox
    title="查询菜单"
    :model="model"
  >

  </SearchBox>
</template>
