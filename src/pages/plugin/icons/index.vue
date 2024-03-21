<script setup>
  import { ref } from 'vue'
  import DynamicIcons from '@/components/DynamicIcons/index.vue'

  const radioVal = ref()
</script>

<template>
  <DynamicIcons v-model="radioVal" />
</template>
