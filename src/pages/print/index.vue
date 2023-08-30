<script setup>
  import { ref } from 'vue'
  import Print from '@/utils/print/index.js'

  const tem1Print = new Print('tem1')
  const printData = { name: 'ealien', age: 18 }
  const handlePrint = () => {
    tem1Print.print(printData)
  }

  const handlePdf = () => {
    tem1Print.toPdf(printData, '你好pdf')
  }

  const previewHtml = ref(null)
  const visible = ref(false)
  const handlePreview = () => {
    previewHtml.value = tem1Print.getPreviewHtml(printData)
    visible.value = true
  }
</script>

<template>
  <a-space>
    <a-button
      @click="handlePrint"
      type="primary"
    >
      打印
    </a-button>

    <a-button
      @click="handlePdf"
      type="primary"
    >
      下载pdf
    </a-button>

    <a-button
      type="primary"
      @click="handlePreview"
    >
      预览
    </a-button>
  </a-space>

  <a-modal
    title="预览"
    v-model:open="visible"
    width="850px"
  >
    <div
      v-if="previewHtml && visible"
      v-html="previewHtml"
    />
  </a-modal>
</template>

<style scoped lang="less"></style>
