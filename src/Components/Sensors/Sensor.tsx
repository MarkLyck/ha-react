import {
  TemperatureSensor,
  HumiditySensor,
  OccupancySensor,
} from 'src/Components/Sensors'
import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import SensorCard from './Card'

type SensorProps = {
  entityId: string
}
const Sensor = ({ entityId }: SensorProps) => {
  if (entityId.includes('temp')) {
    return <TemperatureSensor entityId={entityId} />
  }
  if (entityId.includes('humid')) {
    return <HumiditySensor entityId={entityId} />
  }
  if (entityId.includes('occupancy')) {
    return <OccupancySensor entityId={entityId} />
  }

  return (
    <SensorCard>
      <b>?</b>
    </SensorCard>
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
