<script setup>
  import { useCountDown } from '@/lib/hooks/useCountDown/index.js'
  import { message } from 'ant-design-vue'

  const { start, pause, reset, current } = useCountDown({
    time: 31536000000, // 一年
    // millisecond: props.millisecond,
    onChange: (current) => {
    },
    onFinish: () => {
      message.success('倒计时结束')
    }
  })
  start()
</script>

<template>count-down {{ current }}</template>

<style scoped lang="less"></style>
