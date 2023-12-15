<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    textToHighlight: {
      type: String,
      default: ''
    },
    searchWords: {
      type: Array,
      default: () => []
    },
    activeClassName: { type: String, default: 'text_mark_default' },
    highlightClassName: {
      type: Object,
      default: () => {}
    }
  })

  const useBrightenKeyword = (result, keyword) => {
    if (!result || !keyword) return

    const Reg = new RegExp(keyword.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'), 'gi')
    return result.replace(
      Reg,
      `<span class="${props.highlightClassName[keyword] || props.activeClassName}">${keyword}</span>`
    )
  }

  const markText = ref('')
  const setMarkText = () => {
    let tempStr = props.textToHighlight
    props.searchWords.forEach((text) => {
      tempStr = useBrightenKeyword(tempStr, text)
    })
    markText.value = tempStr
  }
  setMarkText()
</script>

<template>
  <div v-html="markText" />
</template>

<style>
  .text_mark_default {
    color: blue;
  }
</style>
