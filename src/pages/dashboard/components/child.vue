<script setup>
  import { inject } from 'vue'
  import Sun from './sun.vue'

  const sex = inject('sex')
</script>

<template>
  <div style="border: 1px solid #ca8a04; padding: 20px">
    <h3>child-sex {{ sex }}</h3>
    <Sun />
  </div>
</template>
