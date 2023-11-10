<script setup>
  import { ref, reactive } from 'vue'
  import useFetch from '@/hooks/useFetch'
  import { API_POSTS } from '@/service/posts/index.js'

  const inputVal = ref({ id: '1', name: null, age: undefined, as: '' })

  const state = reactive({
    page_index: 1,
    page_size: 2,
    id: 1
  })

  const { data, isFetching, execute } = await useFetch(API_POSTS.photos, {
    query: state
  }).json()
</script>

<template>
  <div class="mb14px header_title">卡片列表</div>
  <a-form>
    <a-form-item label="ID">
      <a-input
        v-model:value="state.id"
        placeholder="请输入"
      />
    </a-form-item>
  </a-form>
  <a-button @click="execute">搜索</a-button>
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
