import {
  DoorWindowSensor,
  TemperatureSensor,
  HumiditySensor,
  OccupancySensor,
  WifiSensor,
  PowerSensor,
  FallbackSensor,
  UptimeSensor,
} from 'src/Components/Sensors'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorTile } from 'src/ui-components'

type SensorProps = {
  entityId: string
}
const Sensor = ({ entityId }: SensorProps) => {
  let SensorType = null
  if (entityId.includes('door') || entityId.includes('window')) {
    SensorType = DoorWindowSensor
  }
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
      <div>
        <SensorType entityId={entityId} />
      </div>
    )
  }

  return <FallbackSensor entityId={entityId} />
}

const SensorWrapper = (props: SensorProps) => (
  <ErrorBoundary
    FallbackComponent={(error) => (
      <ErrorTile error={error} entityProps={props} />
    )}
  >
    <Sensor {...props} />
  </ErrorBoundary>
)

export default SensorWrapper
