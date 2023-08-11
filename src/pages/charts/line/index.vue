<script setup>
  import { ref, onMounted } from 'vue'
  import echarts from '@/lib/echarts.js'

  const line_chart = ref()

  const xAxisData = [
    '2020-05-11',
    '2020-05-12',
    '2020-05-13',
    '2020-05-14',
    '2020-05-15',
    '2020-05-16',
    '2020-05-17',
    '2020-05-18',
    '2020-05-19',
    '2020-05-20',
    '2020-05-21',
    '2020-05-22',
    '2020-05-23',
    '2020-05-24',
    '2020-05-25',
    '2020-05-26',
    '2020-05-27',
    '2020-05-28',
    '2020-05-29',
    '2020-05-30',
    '2020-05-31',
    '2020-06-01',
    '2020-06-02',
    '2020-06-03',
    '2020-06-04',
    '2020-06-05',
    '2020-06-06',
    '2020-06-07',
    '2020-06-08',
    '2020-06-09',
    '2020-06-10'
  ]
  const option = {
    textStyle: {
      fontFamily: 'Din-Light'
    },
    color: [
      '#123dac',
      '#73e2e2',
      '#ff7e85',
      '#9b52ff',
      '#fac524',
      '#46caff',
      '#a1e867',
      '#10b2b2',
      '#ec87f7',
      '#f4905a',
      '#00baba',
      '#facf24',
      '#e89d67',
      '#23c6c6',
      '#fa8699',
      '#40b7fc',
      '#006d75',
      '#595959',
      '#f4764f',
      '#a640fc',
      '#fda23f',
      '#2d7ae4',
      '#5092ff',
      '#9351ed',
      '#8a89fe',
      '#df89e8',
      '#2797ff',
      '#6ad089',
      '#7c92e8 '
    ],
    title: {
      text: '',
      left: '47%',
      textStyle: {
        fontSize: 24
      }
    },
    legend: {
      data: [
        {
          name: '哇咔咔',
          icon: 'path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z'
        },
        {
          name: 'Ealien',
          icon: 'path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z'
        },
        {
          name: 'Nuomi',
          icon: 'path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z'
        }
      ],
      left: 'left',
      selected: {
        哇咔咔: true,
        Ealien: true,
        Nuomi: true
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      textStyle: {
        color: '#898989',
        lineHeight: 15
      },
      type: 'scroll'
    },
    tooltip: {
      backgroundColor: '#fff',
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      textStyle: {
        color: '#565656',
        lineHeight: 28
      },
      confine: true,
      padding: 12
    },
    grid: {
      left: 0,
      right: 0,
      top: 100,
      bottom: 100
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxisData,
      axisLabel: {
        color: '#a0a9bc',
        //X轴标签 label 做了特殊处理，防止左右溢出
        formatter: (value, index) => {
          if (index === 0 || index === xAxisData.length - 1) {
            return ''
          }
          return value
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      name: '',
      nameTextStyle: {
        color: 'gray'
      },
      type: 'value',
      axisLabel: {
        color: '#a0a9bc',
        inside: true,
        margin: 0,
        verticalAlign: 'bottom'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      minInterval: 1,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: '哇咔咔',
        data: [
          43, 58, 195, 229, 320, 211, 124, 131, 124, 360, 124, 78, 160, 604, 17, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0
        ],
        type: 'line',
        smooth: true,
        smoothMonotone: 'x',
        cursor: 'pointer',
        showSymbol: false,
        lineStyle: {
          shadowColor: 'rgba(18,61,172,0.5)',
          shadowBlur: 10
        }
      },
      {
        name: 'Ealien',
        data: [
          23, 39, 118, 71, 116, 89, 58, 71, 51, 146, 31, 41, 61, 485, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        type: 'line',
        smooth: true,
        smoothMonotone: 'x',
        cursor: 'pointer',
        showSymbol: false,
        lineStyle: {
          shadowColor: 'rgba(115,226,226,0.5)',
          shadowBlur: 10
        }
      },
      {
        name: 'Nuomi',
        data: [
          20, 37, 91, 72, 68, 67, 54, 42, 42, 115, 41, 33, 64, 312, 4, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        type: 'line',
        smooth: true,
        smoothMonotone: 'x',
        cursor: 'pointer',
        showSymbol: false,
        lineStyle: {
          shadowColor: 'rgba(255,126,133,0.5)',
          shadowBlur: 10
        }
      }
    ]
  }

  onMounted(() => {
    const line = echarts.init(line_chart.value, 'walden')
    line.setOption(option)
  })
</script>

<template>
  <div
    ref="line_chart"
    class="h400px"
  />
</template>
