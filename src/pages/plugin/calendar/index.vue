<script setup>
  import { ref, computed } from 'vue'
  import { Calendar, DatePicker } from 'v-calendar'
  import 'v-calendar/style.css'

  const range = ref({
    start: new Date(2020, 0, 6),
    end: new Date(2020, 0, 10)
  })

  const dragValue = ref(null)
  const selectDragAttribute = computed(() => ({
    popover: {
      visibility: 'hover',
      isInteractive: false
    }
  }))

  // colors support gray, red, orange, yellow, green, teal, blue, indigo, purple, pink.
  const selectedColor = ref('blue')
  const attrs = ref([
    {
      key: 'test',
      highlight: true,
      dates: { start: new Date(2023, 8, 10), end: new Date(2023, 8, 18) }
    },
    {
      highlight: 'red',
      dates: '2023-09-21'
    },
    {
      dot: 'red',
      dates: '2023-09-20'
    },
    {
      dot: true,
      dates: '2023-09-20'
    },
    {
      highlight: true,
      dates: '2023-09-24'
    },
    {
      dot: true,
      dates: '2023-09-22'
    },
    {
      dot: 'red',
      dates: '2023-09-22'
    },
    {
      bar: true,
      dates: '2023-09-23'
    },
    {
      bar: 'red',
      dates: '2023-09-23'
    },
    {
      bar: 'yellow',
      dates: '2023-09-23'
    },
    {
      bar: 'orange',
      dates: '2023-09-23'
    },
    {
      highlight: 'orange',
      dates: '2023-09-24'
    },
    {
      highlight: 'green',
      dates: '2023-09-25'
    },
    {
      highlight: 'purple',
      dates: '2023-09-26'
    }
  ])
</script>

<template>
  <Calendar
    :columns="3"
    :color="selectedColor"
    :attributes="attrs"
  />
  <div class="mt16px" />

  <DatePicker
    v-model.range="range"
    :select-attribute="selectDragAttribute"
    :drag-attribute="selectDragAttribute"
    @drag="dragValue = $event"
  >
    <template #day-popover="{ format }">
      <div class="text-sm">
        {{ format(dragValue ? dragValue.start : range.start, 'MMM D') }}
        -
        {{ format(dragValue ? dragValue.end : range.end, 'MMM D') }}
      </div>
    </template>
  </DatePicker>
</template>

<style scoped lang="less"></style>
