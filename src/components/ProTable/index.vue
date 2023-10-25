<script setup>
  import { isObject } from 'lodash-es'

  const slots = defineSlots()

  const props = defineProps({
    pagination: {
      type: [Object, Boolean],
      default: () => ({
        total: 0,
        current: 1,
        pageSize: 10
      })
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
    class="overflow-auto"
    v-bind="$attrs"
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
