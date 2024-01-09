<script setup>
  const props = defineProps({
    line: {
      type: Number,
      default: 1
    },
    text: {
      type: String
    }
  })
</script>

<template>
  <span
    class="ellipsis-span"
    :style="{ '-webkit-line-clamp': line }"
  >
    {{ text }}
  </span>
</template>

<style scoped lang="less">
  .ellipsis-span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>
