import { ErrorBoundary } from 'react-error-boundary'
import {
  LightCard,
  ThermostatCard,
  VacuumCard,
  MediaPlayerTile,
  SwitchTile,
  TeslaTile,
  PlantTile,
} from 'src/Components/Devices/Tiles'
import { ErrorTile } from 'src/ui-components'

import FallbackTile from './Fallback'

type DeviceProps = {
  entityId: string | null
  areaId?: string
  deviceId?: string
  type?: string
}
const Device = ({ entityId, deviceId, areaId, type }: DeviceProps) => {
  // Custom tiles
  // @ts-ignore
  if (type === 'tesla') return <TeslaTile deviceId={deviceId} areaId={areaId} />
  // @ts-ignore
  if (type === 'plant') return <PlantTile deviceId={deviceId} areaId={areaId} />

  if (!entityId) return null

  const domain = entityId.split('.')[0]

  if (domain === 'switch') return <SwitchTile entityId={entityId} />
  if (domain === 'light') return <LightCard entityId={entityId} />
  if (domain === 'climate') return <ThermostatCard entityId={entityId} />
  if (domain === 'vacuum') return <VacuumCard entityId={entityId} />
  if (domain === 'media_player') return <MediaPlayerTile entityId={entityId} />

  return <FallbackTile entityId={entityId} />
}

const DeviceWrapper = (props: DeviceProps) => (
  <ErrorBoundary
    FallbackComponent={(error) => (
      <ErrorTile error={error} entityProps={props} />
    )}
  >
    <Device {...props} />
  </ErrorBoundary>
)

export default DeviceWrapper
