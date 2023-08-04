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

  const checkIcons = ref(1)
</script>

<template>
  <CheckCard
    v-model="checkIcons"
    :options="options"
  />
</template>
