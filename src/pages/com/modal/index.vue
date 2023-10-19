<script setup>
  import { useModal } from '@/hooks/useModal/index.js'
  import MenuFormModal from '@/pages/setting/menu-enter/components/MenuFormModal.vue'
  import { message } from 'ant-design-vue'

  const modal = useModal({ title: 'useModal测试', width: '600px' })
  const handleModal = () => {
    modal.open(MenuFormModal, {
      ok() {
        message.success('操作确认')
      }
    })
  }
</script>

<template>
  <a-button
    type="primary"
    @click="handleModal"
  >
    use-modal
  </a-button>
</template>
