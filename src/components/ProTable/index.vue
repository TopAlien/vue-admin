<script setup>
  const slots = defineSlots()

  const props = defineProps({
    total: {
      type: Number,
      default: 0
    }
  })
</script>

<template>
  <a-table
    class="overflow-auto"
    v-bind="$attrs"
    size="middle"
    :pagination="{
      showQuickJumper: true,
      total: props.total,
      showTotal: (total) => `共计 ${total} 条`
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
