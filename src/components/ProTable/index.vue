<script setup>
  const slots = defineSlots()
</script>

<template>
  <a-table
    class="overflow-auto"
    v-bind="$attrs"
    size="middle"
    :pagination="{
      showQuickJumper: true,
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
