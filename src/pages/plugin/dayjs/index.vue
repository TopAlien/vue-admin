<script setup>
  import { ref } from 'vue'
  import { dayStartEndTime, dayAgoOrSo, fromCurrentTime } from '@/utils/date.js'
  const dateRange = ref([])

  const dayAgoDate = ref(null)

  const transDate = (num) => {
    dayAgoDate.value = dayAgoOrSo(num)
  }
</script>

<template>
  <a-descriptions
    title="dayjs封装时间处理"
    bordered
    :column="1"
  >
    <a-descriptions-item label="描述">开始结束日期00:00:00 - 23:59:59 化格式</a-descriptions-item>
    <a-descriptions-item label="格式化结果">{{ dayStartEndTime(dateRange) }}</a-descriptions-item>
    <a-descriptions-item label="函数名称">dayStartEndTime</a-descriptions-item>
    <a-descriptions-item label="时间选择">
      <a-range-picker
        v-model:value="dateRange"
        input-read-only
        value-format="YYYY-MM-DD"
      />
    </a-descriptions-item>
  </a-descriptions>
  <a-divider />
  <a-descriptions
    title="dayjs封装时间处理"
    bordered
    :column="1"
  >
    <a-descriptions-item label="描述">某个日期的 - 几天前后</a-descriptions-item>
    <a-descriptions-item label="格式化结果">{{ dayAgoDate }}</a-descriptions-item>
    <a-descriptions-item label="函数名称">dayAgoOrSo</a-descriptions-item>
    <a-descriptions-item label="快捷操作">
      <a-space>
        <a-button
          type="primary"
          @click="transDate(0)"
        >
          当天
        </a-button>
        <a-button
          type="primary"
          @click="transDate(1)"
        >
          一天后
        </a-button>
        <a-button
          type="primary"
          @click="transDate(7)"
        >
          七天后
        </a-button>
        <a-button
          type="primary"
          @click="transDate(30)"
        >
          30天后
        </a-button>
        <a-button
          type="primary"
          @click="transDate(-10)"
        >
          10天前
        </a-button>
      </a-space>
    </a-descriptions-item>
  </a-descriptions>
  <a-divider />
  <a-descriptions
    title="dayjs封装时间处理"
    bordered
    :column="1"
  >
    <a-descriptions-item label="起始时间">2023-09-20 15:00:00</a-descriptions-item>
    <a-descriptions-item label="函数名称">fromCurrentTime</a-descriptions-item>
    <a-descriptions-item label="格式化结果">
      {{ fromCurrentTime('2023-09-19 16:00:00') }}
    </a-descriptions-item>
  </a-descriptions>
</template>
