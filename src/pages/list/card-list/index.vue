<script setup>
  import useFetch from '@/hooks/useFetch'
  import { API_POSTS } from '@/service/posts/index.js'

  // 1、useFetch 使用示例1 query, body 二次封装

  // const inputVal = ref({ id: '1', name: null, age: undefined, as: '' })
  // const { data, isFetching, execute } = await useFetch(API_POSTS.photos, {
  //   query: inputVal
  // }).json()

  // 2、useFetch 使用示例2

  // const state = reactive({
  //   page_index: 1,
  //   page_size: 2,
  //   id: 1
  // })
  // const inputVal = ref({ id: '1', name: null, age: undefined, as: '' })
  // const { data, isFetching, execute } = await useFetch(API_POSTS.photos, {
  //   query: state
  // }).json()

  const { data, isFetching } = await useFetch(API_POSTS.photos).json()
</script>

<template>
  <div class="mb14px header_title">卡片列表</div>
  <div class="flex flex-wrap gap-14px">
    <a-card
      hoverable
      style="width: 240px"
      v-for="photo in (data || []).slice(0, 40)"
      :loading="isFetching"
    >
      <template #cover>
        <a-image :src="photo.thumbnailUrl" />
      </template>
      <a-card-meta :title="photo.albumId">
        <template #description>{{ photo.title }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>
