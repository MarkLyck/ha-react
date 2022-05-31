import {
  TemperatureSensor,
  HumiditySensor,
  OccupancySensor,
  WifiSensor,
  PowerSensor,
  FallbackSensor,
  UptimeSensor,
} from 'src/Components/Sensors'
import { Alert, Tooltip } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import SensorCard from './Card'

type SensorProps = {
  entityId: string
}
const Sensor = ({ entityId }: SensorProps) => {
  let SensorType = null
  if (entityId.includes('temp')) SensorType = TemperatureSensor
  if (entityId.includes('humid')) SensorType = HumiditySensor
  if (entityId.includes('occupancy')) SensorType = OccupancySensor
  if (entityId.includes('wan') || entityId.includes('external_ip')) {
    SensorType = WifiSensor
  }
  if (entityId.includes('power')) SensorType = PowerSensor
  if (entityId.includes('uptime')) SensorType = UptimeSensor

  if (SensorType) {
    return (
      <Tooltip title={entityId}>
        <div>
          <SensorType entityId={entityId} />
        </div>
      </Tooltip>
    )
  }

  return (
    <Tooltip title={entityId}>
      <div>
        <FallbackSensor entityId={entityId} />
      </div>
    </Tooltip>
  )
}

const SensorWrapper = (props: SensorProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Sensor {...props} />
  </ErrorBoundary>
)

export default SensorWrapper
