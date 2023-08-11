import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  GraphicComponent,
  ToolboxComponent
} from 'echarts/components'
import {
  BarChart,
  LineChart,
  PieChart,
  GaugeChart,
  CustomChart,
  GraphChart,
  LinesChart,
  PictorialBarChart
} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import walden from './theme/walden.project.json'

const components = [
  ToolboxComponent,
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  GraphicComponent
]

const charts = [BarChart, LineChart, PieChart, GaugeChart, CustomChart, GraphChart, LinesChart, PictorialBarChart]

echarts.use([...components, ...charts, CanvasRenderer])

echarts.registerTheme('walden', walden.theme)

export default echarts
