<script setup>
  import { ref } from 'vue'
  import VueJsonPretty from 'vue-json-pretty'
  import 'vue-json-pretty/lib/styles.css'

  import FingerprintJS from '@fingerprintjs/fingerprintjs'

  const result = ref({})
  ;(async () => {
    // Get the visitor identifier when you need it.
    const fp = await FingerprintJS.load()
    result.value = await fp.get()
  })()
</script>

<template>
  <div class="header_title">浏览器信息</div>
  <VueJsonPretty :data="result" />
</template>
