<script setup>
import { ref } from 'vue'
import DynamicIcons from '@/components/DynamicIcons/index.vue'

const radioVal = ref(1)
const muVal = ref([1, 5])
</script>

<template>
  <div class="header_title">单选</div>
  <DynamicIcons v-model="radioVal" />

  <div class="header_title mt16px">多选</div>
  <DynamicIcons
    v-model="muVal"
    multiple
  />
</template>
