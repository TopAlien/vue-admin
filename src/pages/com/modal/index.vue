<script setup>
  import SearchList from '@/pages/list/search-list/index.vue'
  import { message, Modal } from 'ant-design-vue'
  import { h } from 'vue'

  const handleModal = () => {
    Modal.confirm({
      icon: h('span'),
      closable: true,
      width: '900px',
      content: h(SearchList),
      onOk() {
        message.success('确认')
      },
      onCancel() {
        message.warn('取消')
      }
    })
  }
</script>

<template>
  <a-button
    type="primary"
    @click="handleModal"
  >
    a-modal
  </a-button>
</template>

<style scoped lang="less"></style>
