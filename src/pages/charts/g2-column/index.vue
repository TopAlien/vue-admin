<script setup>
  import { onMounted } from 'vue'
  import { Chart } from '@antv/g2'

  const data = [
    {
      state: 'AL',
      age: '<10',
      population: 598478,
      group: '1'
    },
    {
      state: 'AL',
      age: '<30',
      population: 106741,
      group: '1'
    },
    {
      state: 'AL',
      age: '<20',
      population: 892083,
      group: '2'
    }
  ]
  onMounted(() => {
    const chart = new Chart({ container: 'container', autoFit: true })

    chart.options({
      type: 'interval',
      theme: 'classic',
      autoFit: true,
      data,
      encode: { x: 'state', y: 'population', color: 'age' },
      transform: [{ type: 'stackY' }, { type: 'sortX', by: 'y', reverse: true }],
      axis: {
        x: { title: '自定义x - title', labelSpacing: 4, style: { labelTransform: 'rotate(90)' } },
        y: { title: '自定义-y title', labelFormatter: '~s' }
      },
      tooltip: ['age', 'population']
    })

    chart.render()
  })
</script>

<template>
  <div
    id="container"
    style="height: 600px"
  />
</template>

<style scoped lang="less"></style>
