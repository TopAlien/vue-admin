<script setup>
  import { reactive, ref } from 'vue'
  import vueEsign from 'vue-esign'
  import { message } from 'ant-design-vue'

  const esignRef = ref(null)
  const signStyle = reactive({ lineWidth: 3, lineColor: '#000000', bgColor: '#ccc', resultImg: '', isCrop: false })

  const clearCanvas = () => {
    esignRef.value.reset()
  }

  const handleGenerate = () => {
    esignRef.value
      .generate()
      .then((res) => {
        console.log('-> res', res)
        message.success('生成base64图片格式成功')
      })
      .catch((err) => {
        // 画布没有签字时会执行这里 'Not Signned'
        message.error(err)
      })
  }
</script>

<template>
  <vueEsign
    ref="esignRef"
    v-model:bgColor="signStyle.bgColor"
    :height="300"
    :isCrop="signStyle.isCrop"
    :lineWidth="signStyle.lineWidth"
    :lineColor="signStyle.lineColor"
  />
  <a-space class="mt16px">
    <a-button
      @click="clearCanvas"
      type="dashed"
    >
      清空画布
    </a-button>
    <a-button
      @click="handleGenerate"
      type="primary"
    >
      生成图片
    </a-button>
  </a-space>
</template>

<style scoped lang="less"></style>
