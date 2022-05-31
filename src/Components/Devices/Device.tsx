import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import {
  LightCard,
  ThermostatCard,
  VacuumCard,
  MediaPlayerTile,
} from 'src/Components/Tiles'

import FallbackTile from './Fallback'

type DeviceProps = {
  entityId: string
}
const Device = ({ entityId }: DeviceProps) => {
  const domain = entityId.split('.')[0]

  if (domain === 'light') return <LightCard entityId={entityId} />
  if (domain === 'climate') return <ThermostatCard entityId={entityId} />
  if (domain === 'vacuum') return <VacuumCard entityId={entityId} />
  if (domain === 'media_player') return <MediaPlayerTile entityId={entityId} />

  return <FallbackTile entityId={entityId} />
}

const DeviceWrapper = (props: DeviceProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Device {...props} />
  </ErrorBoundary>
)

export default DeviceWrapper
