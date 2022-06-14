import {
  DoorWindowSensor,
  TemperatureSensor,
  HumiditySensor,
  LumensSensor,
  OccupancySensor,
  MotionSensor,
  WifiSensor,
  PowerSensor,
  FallbackSensor,
  UptimeSensor,
  PlantSensor,
  PressureSensor,
} from 'src/Components/Sensors'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorTile } from 'src/ui-components'

type SensorProps = {
  entityId: string
  id?: string
}

const getSensorType = (entityId: string) => {
  // Custom sensors
  if (entityId.includes('plant.')) return PlantSensor

  if (entityId.includes('door') || entityId.includes('window')) {
    return DoorWindowSensor
  }
  if (entityId.includes('temp')) return TemperatureSensor
  if (entityId.includes('humid')) return HumiditySensor
  if (entityId.includes('luminance')) return LumensSensor
  if (entityId.includes('occupancy')) return OccupancySensor
  if (entityId.includes('motion')) return MotionSensor
  if (entityId.includes('pressure')) return PressureSensor
  if (entityId.includes('wan') || entityId.includes('external_ip')) {
    return WifiSensor
  }
  if (entityId.includes('power')) return PowerSensor
  if (entityId.includes('uptime')) return UptimeSensor

  return undefined
}

const Sensor = ({ entityId, type, ...restProps }: SensorProps) => {
  let SensorType = getSensorType(entityId)

  if (SensorType) {
    return (
      <div>
        <SensorType entityId={entityId} {...restProps} />
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
