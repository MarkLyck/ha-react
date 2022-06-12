import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Line } from 'react-chartjs-2'

import dayjs from 'dayjs'
import useStore from 'src/lib/useStore'
import configuration from 'src/../configuration.json'
// @ts-ignore
import groupBy from 'lodash/groupBy'
// @ts-ignore
import minBy from 'lodash/minBy'
// @ts-ignore
import meanBy from 'lodash/meanBy'

const Container = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  width: 180px;
  padding: 32px 0 0;
  border-radius: 12px;

  @media (max-width: 640px) {
    width: calc(50% - 8px);
  }
`

const CurrentTemp = styled.p`
  position: absolute;
  top: 8px;
  left: 12px;
  font-weight: bold;
  font-size: 20px;
  color: ${(p) => p.theme.colors.warning[600]};
`

const getAverageResults = (results: any, sensorIds: string[]) => {
  let historyMap: any = {}
  sensorIds.forEach((id) => {
    const test = results[id].map((point: any) => ({
      value: Number(point.s),
      timestamp: point.lu,
    }))

    const groupsByHour = groupBy(test, (item: any) => {
      return new Date(item.timestamp * 1000).setMinutes(0, 0, 0)
    })

    const averageTemperatures = Object.keys(groupsByHour).map((key: any) => {
      const list = groupsByHour[key]
      const averageValue = meanBy(list, (item: any) => {
        return item.value
      })
      return {
        timestamp: Number(key),
        value: averageValue,
      }
    })

    averageTemperatures.forEach((point) => {
      if (!historyMap[point.timestamp]) {
        historyMap[point.timestamp] = {
          values: [point.value],
        }
      } else {
        historyMap[point.timestamp].values.push(point.value)
      }
    })
  })

  const averageHistory = Object.keys(historyMap)
    .map((key: any) => {
      const values = historyMap[key].values
      const average = meanBy(values, (item: any) => {
        return item
      })
      return {
        timestamp: new Date(Number(key)),
        value: average,
      }
    })
    .sort((a: any, b: any) => {
      return a.timestamp - b.timestamp
    })

  return averageHistory
}

const Overview = () => {
  const theme = useTheme()
  const [temperatureData, setTemperatureData] = useState<any[]>([])
  const { sendSocket } = useStore((state: any) => ({
    sendSocket: state.sendSocket,
  }))

  const getHistory = async () => {
    const response = await sendSocket({
      type: 'history/history_during_period',
      end_time: dayjs(),
      start_time: dayjs().subtract(24, 'hour'),
      minimal_response: true,
      entity_ids: configuration.temperature_sensors,
    })

    const averageHouseTemperatures = getAverageResults(
      response.result,
      configuration.temperature_sensors
    )
    setTemperatureData(averageHouseTemperatures)
  }

  useEffect(() => {
    getHistory()
  }, [])

  const min = minBy(temperatureData, (item: any) => {
    return item.value
  })?.value

  return (
    <Container>
      <CurrentTemp>
        {temperatureData[temperatureData.length - 1]?.value.toFixed(1)}°
      </CurrentTemp>
      {temperatureData.length > 1 && (
        <Line
          height={100}
          data={{
            datasets: [
              {
                label: 'temperature',
                data: temperatureData,
                pointRadius: 0,
                tension: 0.5,
                // @ts-ignore
                gradient: {
                  borderColor: {
                    axis: 'y',
                    colors: {
                      70: theme.colors.primary[600],
                      76: theme.colors.warning[600],
                      80: theme.colors.danger[600],
                    },
                  },
                },
              },
            ],
          }}
          options={{
            scales: {
              x: {
                type: 'timeseries',
                display: false,
              },
              y: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'timestamp',
              yAxisKey: 'value',
            },
          }}
        />
      )}
    </Container>
  )
}
export default Overview
