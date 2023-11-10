<script setup>
  import useFetch from '@/hooks/useFetch'
  import { API_POSTS } from '@/service/posts/index.js'

  const { data, isFetching, execute } = await useFetch(API_POSTS.photos).json()
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
