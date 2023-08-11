<script setup>
  import { ref, onMounted } from 'vue'
  import echarts from '@/lib/echarts.js'

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

  // bar2
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - 13, shape.y - 13]
      const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
  })
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x, shape.y]
      const c2 = [xAxisPoint[0], xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
      const c4 = [shape.x + 18, shape.y - 9]
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
  })
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]
      const c2 = [shape.x + 18, shape.y - 9]
      const c3 = [shape.x + 5, shape.y - 22]
      const c4 = [shape.x - 13, shape.y - 13]
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)

  const MAX = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]
  const VALUE = [21.9, 26.8, 24.2, 54.9, 74.5, 78.3, 119.0, 126.9, 190.8, 123.2, 156.2, 169.3, 179.5, 155.5]
  const options2 = {
    backgroundColor: '#012366',

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params, ticket, callback) {
        const item = params[1]
        return item.name + ' : ' + item.value
      }
    },
    grid: {
      left: 40,
      right: 40,
      bottom: 100,
      top: 100,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [
        '立春',
        '雨水',
        '惊蛰',
        '春分',
        '清明',
        '谷雨',
        '立夏',
        '小满',
        '芒种',
        '夏至',
        '小暑',
        '大暑',
        '立秋',
        '处暑'
      ],
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white'
        }
      },
      offset: 25,
      axisTick: {
        show: false,
        length: 9,
        alignWithLabel: true,
        lineStyle: {
          color: '#7DFFFD'
        }
      },
      axisLabel: {
        show: true,
        fontSize: 16
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        fontSize: 16
      },
      boundaryGap: ['20%', '20%']
    },
    series: [
      {
        type: 'custom',
        renderItem: function (params, api) {
          const location = api.coord([api.value(0), api.value(1)])
          return {
            type: 'group',
            children: [
              {
                type: 'CubeLeft',
                shape: {
                  api,
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: 'rgba(47,102,192,.27)'
                }
              },
              {
                type: 'CubeRight',
                shape: {
                  api,
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: 'rgba(59,128,226,.27)'
                }
              },
              {
                type: 'CubeTop',
                shape: {
                  api,
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: 'rgba(72,156,221,.27)'
                }
              }
            ]
          }
        },
        data: MAX
      },
      {
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)])
          var color =
            api.value(1) > 2000
              ? 'red'
              : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(67,102,243,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(29,67,243,1)'
                  }
                ])
          return {
            type: 'group',
            children: [
              {
                type: 'CubeLeft',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: color
                }
              },
              {
                type: 'CubeRight',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: color
                }
              },
              {
                type: 'CubeTop',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: color
                }
              }
            ]
          }
        },
        data: VALUE
      },
      {
        type: 'bar',
        label: {
          show: true,
          position: 'top',

          fontSize: 16,
          color: '#fff',
          offset: [2, -25]
        },
        itemStyle: {
          color: 'transparent'
        },
        tooltip: {},
        data: MAX
      }
    ]
  }

  const options3 = {
    backgroundColor: '#031245',
    color: [
      '#63caff',
      '#49beff',
      '#03387a',
      '#03387a',
      '#03387a',
      '#6c93ee',
      '#a9abff',
      '#f7a23f',
      '#27bae7',
      '#ff6d9d',
      '#cb79ff',
      '#f95b5a',
      '#ccaf27',
      '#38b99c',
      '#93d0ff',
      '#bd74e0',
      '#fd77da',
      '#dea700'
    ],
    grid: {
      containLabel: true,
      left: 20,
      right: 20,
      bottom: 10,
      top: 40
    },
    xAxis: {
      axisLabel: {
        color: '#c0c3cd',
        fontSize: 14,
        interval: 0
      },
      axisTick: {
        lineStyle: {
          color: '#384267'
        },
        show: true
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed'
        },
        show: true
      },
      data: ['0点~2点', '3点~5点', '6点~8点', '0点~2点', '3点~5点', '6点~8点', '0点~2点', '3点~5点'],
      type: 'category'
    },
    yAxis: {
      axisLabel: {
        color: '#c0c3cd',
        fontSize: 14
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1
        },
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#384267',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed'
        },
        show: true
      },
      name: ''
    },
    series: [
      {
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: 'bar',
        barMaxWidth: 'auto',
        barWidth: 30,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: '#0b9eff'
              },
              {
                offset: 1,
                color: '#63caff'
              }
            ]
          }
        },
        label: {
          show: true,
          position: 'top',
          distance: 10,
          color: '#fff'
        }
      },
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [30, 15]
      },
      {
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 12],
        zlevel: 2
      },
      {
        data: [741, 741, 741, 741, 741, 741, 741, 741],
        type: 'bar',
        barMaxWidth: 'auto',
        barWidth: 30,
        barGap: '-100%',
        zlevel: -1
      },
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [30, 15],
        zlevel: -2
      },
      {
        data: [741, 741, 741, 741, 741, 741, 741, 741],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 12],
        zlevel: -1
      }
    ],
    tooltip: {
      trigger: 'axis',
      show: false
    }
  }

  const bar_chart = ref()
  const bar2_chart = ref()
  const bar3_chart = ref()
  onMounted(() => {
    const bar = echarts.init(bar_chart.value, 'walden')
    bar.setOption(options)

    const bar2 = echarts.init(bar2_chart.value, 'walden')
    bar2.setOption(options2)

    const bar3 = echarts.init(bar3_chart.value, 'walden')
    bar3.setOption(options3)
  })
</script>

<template>
  <div
    ref="bar_chart"
    class="h400px"
  />

  <div
    ref="bar2_chart"
    class="h400px"
  />

  <div
    ref="bar3_chart"
    class="h400px"
  />
</template>
