<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { userCounterStore } from '@/store'

const counterStore = userCounterStore()
</script>

<template>
  <div>
    <h1>{{ counterStore.count }}</h1>
    <a-button type="primary" class="ma20px" @click="counterStore.increment">overlayscrollbars</a-button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div v-scrollbar class="h400px overflow-auto">
    <div class="h1000px">1237912379</div>
  </div>
  <HelloWorld msg="Vite + Vue overlayscrollbars" />
</template>
