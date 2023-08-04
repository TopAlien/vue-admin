<script setup>
  import { ref } from 'vue'
  import CheckCard from '@/components/CheckCard/index.vue'
  import icons from '@/components/DynamicIcons/icons.js'

  const options = ref([])
  icons.forEach((icon, index) => {
    options.value.push({
      id: index + 1,
      title: icon,
      icon: icon
    })
  })
</script>

<template>
  <CheckCard
    v-bind="$attrs"
    :options="options"
  />
</template>
