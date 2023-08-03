<script setup>
  import { Watermark } from 'ant-design-vue'
</script>

<template>
  <Watermark
    :height="30"
    :width="130"
    title="水印"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div class="min-h-screen"></div>
  </Watermark>
</template>
