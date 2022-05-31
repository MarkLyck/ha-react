import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import { LightCard, ThermostatCard, VacuumCard } from 'src/Components/Tiles'
type DeviceProps = {
  entityId: string
}
const Device = ({ entityId }: DeviceProps) => {
  const domain = entityId.split('.')[0]

  if (domain === 'light') return <LightCard entityId={entityId} />
  if (domain === 'climate') return <ThermostatCard entityId={entityId} />
  if (domain === 'vacuum') return <VacuumCard entityId={entityId} />

  return (
    <div>
      <b>?</b>
    </div>
  )
}

const DeviceWrapper = (props: DeviceProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Device {...props} />
  </ErrorBoundary>
)

export default DeviceWrapper
