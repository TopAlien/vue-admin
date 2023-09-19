<script setup>
  import { ref } from 'vue'
  import { dayStartEndTime } from '@/utils/date.js'
  const dateRange = ref([])
</script>

<template>
  <a-descriptions
    title="时间格式"
    bordered
    :column="1"
  >
    <a-descriptions-item label="描述">开始结束日期00:00:00 - 23:59:59 化格式</a-descriptions-item>
    <a-descriptions-item label="格式化结果">{{ dayStartEndTime(dateRange) }}</a-descriptions-item>
    <a-descriptions-item label="函数">dayStartEndTime</a-descriptions-item>
    <a-descriptions-item label="时间选择">
      <a-range-picker
        v-model:value="dateRange"
        input-read-only
        value-format="YYYY-MM-DD"
      />
    </a-descriptions-item>
  </a-descriptions>
  <a-divider />
</template>

<style scoped lang="less"></style>
