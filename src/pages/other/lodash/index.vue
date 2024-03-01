<script setup>
  import { last, first, groupBy, random } from 'lodash-es'
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

  const inventory = [
    { name: '芦笋', type: '蔬菜', quantity: 5 },
    { name: '香蕉', type: '水果', quantity: 0 },
    { name: '山羊', type: '肉', quantity: 23 },
    { name: '樱桃', type: '水果', quantity: 5 },
    { name: '鱼', type: '肉', quantity: 22 }
  ]

  const result = groupBy(inventory, ({ type }) => type)

  console.log(result)

  const res2 = groupBy(inventory, ({ quantity }) => (quantity > 5 ? 'ok' : 'restock'))

  console.log(res2)

  console.log(random(3, 6))
</script>

<template>
  <div class="header_title">打开控制台 console</div>
</template>
