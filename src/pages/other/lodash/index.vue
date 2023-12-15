<script setup>
  import { last, first } from 'lodash-es'
  import { getLast, getFirst } from '@/utils/get.js'

  const arr = [1, 2, 3, 4, 5, 6]
  const arr1 = [{ name: 'elaien' }, { name: 'wakaka' }, { name: 'hello' }]

  console.log('数据源1', arr)
  console.log('数据源2', arr1)

  // 性能对比： at > slice > length判断，考虑兼容性选择slice
  console.log('lodash-last', last(arr), last(arr1))

  console.log('自封装高性能-last', getLast(arr), getLast(arr1))

  console.log('lodash-first', first(arr), first(arr1))

  console.log('自封装高性能-first', getFirst(arr), getFirst(arr1))
</script>

<template>
  <div>打开控制台 console</div>
</template>
