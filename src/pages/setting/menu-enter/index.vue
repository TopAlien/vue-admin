<script setup>
  import HeaderSearch from './components/HeaderSearch.vue'
  import List from './components/List.vue'
  import useFetch from '@/hooks/useFetch/index.js'
  import { API_USER } from '@/service/user/index.js'

  const { data } = useFetch(API_USER.roleRoutes).json()
</script>

<template>
  <HeaderSearch />
  <List :list="data?.routes" />
</template>
