import * as echarts from 'echarts/core'
import { DatasetComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import walden from './theme/walden.project.json'

echarts.use([DatasetComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer])

echarts.registerTheme('walden', walden.theme)

export default echarts
