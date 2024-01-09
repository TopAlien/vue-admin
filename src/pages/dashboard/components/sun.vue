<script setup>
  import { inject } from 'vue'

  const handleChange = () => {
    const now = Date.now()
    sex.value = `孙子修改一下${now}`
  }

  const sex = inject('sex')
</script>

<template>
  <div style="border: 1px solid #c7d2fe; padding: 20px">
    <h3>child-sex {{ sex }}</h3>
    <a-button @click="handleChange">孙子节点修改</a-button>
  </div>
</template>
