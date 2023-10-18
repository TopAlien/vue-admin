<script setup>
  import HeaderSearch from './components/HeaderSearch.vue'
  import List from './components/List.vue'
  import { ref } from 'vue'
  import { adminRoutes } from '@/mock/data.js'

  const list = ref(adminRoutes)
</script>

<template>
  <HeaderSearch />
  <List :list="list" />
</template>
