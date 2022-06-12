import {
  Chart,
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  PointElement,
  LineElement,
} from 'chart.js'
// @ts-ignore
import gradient from 'chartjs-plugin-gradient/dist/chartjs-plugin-gradient.min.js'
import 'chartjs-adapter-dayjs'

Chart.register(TimeSeriesScale)
Chart.register(LinearScale)
Chart.register(CategoryScale)
Chart.register(PointElement)
Chart.register(LineElement)
Chart.register(gradient)
