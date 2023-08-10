<script setup>
  import { ref, onMounted } from 'vue'
  import echarts from '@/lib/echarts.js'

  const bar_chart = ref()

  const options = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }

  onMounted(() => {
    const bar = echarts.init(bar_chart.value, 'walden')
    bar.setOption(options)
  })
</script>

<template>
  <div
    ref="bar_chart"
    class="h400px"
  />
</template>
