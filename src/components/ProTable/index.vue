<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { isObject } from 'lodash-es'
  import { setTableColumn, getScrollHeight } from '@/utils/table.js'

  const slots = defineSlots()

  const props = defineProps({
    pagination: {
      type: [Object, Boolean],
      default: () => ({
        total: 0,
        current: 1,
        pageSize: 10
      })
    },
    columns: {
      type: Array,
      default: () => []
    },
    // 存在时开启区域滚动，同一个页面多表格时设置可避免计算错误
    scrollAreaKey: {
      type: String,
      default: ''
    },
    scrollX: {
      type: Number
    },
    extraBottom: {
      type: Number,
      default: 80
    }
  })

  const columns = computed(() => setTableColumn(props.columns))

  const scrollHeight = ref()
  onMounted(() => {
    if (props.scrollAreaKey) {
      scrollHeight.value = getScrollHeight(`.${props.scrollAreaKey} .ant-table-tbody`, props.extraBottom)
    }
  })
</script>

<template>
  <div
    v-if="slots.extraL || slots.extraR"
    class="flex justify-between mb16px"
  >
    <a-space>
      <slot name="extraL"><span></span></slot>
    </a-space>
    <a-space>
      <slot name="extraR"><span></span></slot>
    </a-space>
  </div>

  <a-table
    v-bind="$attrs"
    :class="['overflow-auto', props.scrollAreaKey]"
    size="middle"
    :pagination="
      isObject(pagination)
        ? {
            showQuickJumper: true,
            total: props.pagination.total,
            current: props.pagination.current,
            pageSize: props.pagination.pageSize,
            showTotal: (total) => `共计 ${total} 条`
          }
        : false
    "
    :columns="columns"
    :scroll="{
      y: scrollHeight,
      x: scrollX
    }"
  >
    <template
      v-for="(_, key, i) in slots"
      :key="i"
      v-slot:[key]="{ text, title, record, index, column, filtered, indent, expanded }"
    >
      <slot
        :name="key"
        v-bind="{ text, title, record, index, column, filtered, indent, expanded }"
      ></slot>
    </template>
  </a-table>
</template>
