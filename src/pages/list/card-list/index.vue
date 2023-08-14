<script setup>
  import { ref } from 'vue'
  import { photosList } from '@/service/posts/index.js'

  const photos = ref([])
  const getPhotosList = async () => {
    const data = await photosList()
    photos.value = data.slice(0, 40)
  }
  getPhotosList()
</script>

<template>
  <div class="mb14px header_title">卡片列表</div>
  <div class="flex flex-wrap justify-between gap-14px">
    <a-card
      hoverable
      style="width: 240px"
      v-for="photo in photos"
    >
      <template #cover>
        <img
          alt="example"
          :src="photo.thumbnailUrl"
        />
      </template>
      <a-card-meta :title="photo.albumId">
        <template #description>{{ photo.title }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style scoped lang="less"></style>
