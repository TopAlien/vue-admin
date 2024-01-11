<script setup>
  import TextEllipsis from '@/components/TextEllipsis/index.vue'

  const text =
    '测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。测试文本，哇咔咔。'

  const enText =
    'asdhkashdkasdhkasdhkasdhkasdhaksdhaksdhaksdhkasdhaksdhkasdhkashdkasdhkasdhkasdhkasdhaksdhaksdhaksdhkasdhaksdhkasdhkashdkasdhkasdhkasdhkasdhaksdhaksdhaksdhkasdhaksdhk'
</script>

<template>
  <div class="header_title">文本溢出显示...</div>
  <a-divider orientation="left">一行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="1"
      :text="text"
    />
  </div>

  <a-divider orientation="left">二行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="2"
      :text="text"
    />
  </div>

  <a-divider orientation="left">三行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="3"
      :text="text"
    />
  </div>

  <h3 class="mt60px">英文测试</h3>
  <a-divider orientation="left">一行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="1"
      :text="enText"
    />
  </div>

  <a-divider orientation="left">二行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="2"
      :text="enText"
    />
  </div>

  <a-divider orientation="left">三行溢出</a-divider>
  <div style="width: 400px">
    <TextEllipsis
      :line="3"
      :text="enText"
    />
  </div>
</template>
