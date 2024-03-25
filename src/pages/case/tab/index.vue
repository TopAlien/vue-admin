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

  <p>
    1、场景：公司不同项目下a项目的商品详情，同样适用于b项目，不想二次开发。所以b项目引入了a商品详情。
    a项目下的商品详情有改动后希望通知b。b项目接到通知可刷新列表。b项目下新建路由iframe套入a项目的商品详情地址。a,b在iframe中可以使用postMessage通信。然后b在做bus通知其他具体的页面刷新
  </p>

  <Codemirror
    v-model:value="code"
    border
  />
</template>
