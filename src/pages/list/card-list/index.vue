<script setup>
  import { computed } from 'vue'
  import useFetch from '@/hooks/useFetch'
  import { API_POSTS } from '@/service/posts/index.js'

  // 不使用await 不阻塞页面
  const { data, isFetching, execute } = useFetch(API_POSTS.photoList).json()

  const list = computed(() => {
    if (data.value && data.value.length) {
      return data.value.slice(0, 10)
    }

    return []
  })
</script>

<template>
  <div class="mb14px header_title">卡片列表</div>
  <div class="flex flex-wrap gap-14px">
    <a-card
      hoverable
      style="width: 240px"
      v-for="photo in list"
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
