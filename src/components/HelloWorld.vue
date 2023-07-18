<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div class="tless">
    <div class="tless_item">
      tless-item
      <div class="item_title">title</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}

.tless {
  background-color: aqua;
  &_item {
    color: beige;

    & .item_title {
      color: blueviolet;
    }
  }
}
</style>
