<script setup>
  const emit = defineEmits(['confirm', 'cancel'])

  const props = defineProps({
    onConfirm: {
      type: Function
    },
    onCancel: {
      type: Function
    },
    okText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  })
</script>

<template>
  <a-space class="flex flex-justify-end">
    <a-button
      v-if="props.onCancel"
      @click="emit('cancel')"
    >
      {{ cancelText }}
    </a-button>
    <a-button
      v-if="props.onConfirm"
      type="primary"
      @click="emit('confirm')"
    >
      {{ okText }}
    </a-button>
  </a-space>
</template>
