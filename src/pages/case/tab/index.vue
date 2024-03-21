<script setup>
  import 'codemirror/mode/javascript/javascript.js'
  import Codemirror from 'codemirror-editor-vue3'

  const code = `
    // 非同源页面发送消息
    window.parent.postMessage('message-data', 'https://www.baidu.com')
  
    // 父级页面监听
    window.addEventListener(
      'message',
      (evt) => {
        console.log(evt)
      },
      false
    )
  `
</script>
<template>
  <div class="mb14px header_title">演示非同源新tab标签消息通知</div>

  <h2>将非同源页面通过ifrmae转为父级同源， 新tab页面postMessage通信，同源页面bus通信</h2>

  <Codemirror
    v-model:value="code"
    border
    height="400"
    width="600"
  />
</template>
