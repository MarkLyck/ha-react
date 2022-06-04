import useStore from 'src/lib/useStore'

import TVTile from './TVTile'
import AudioTile from './AudioTile'

type MediaPlayerTileProps = {
  entityId: string
}

export const MediaPlayerTile = ({ entityId }: MediaPlayerTileProps) => {
  const { states, getDevice } = useStore((state: any) => ({
    states: state.states,
    getDevice: state.getDevice,
  }))
  const entity = states[entityId]
  const device = getDevice(entity.entity_id)
  const deviceName = device.name.toLowerCase()
  const modelName = device.model.toLowerCase()

  let deviceType = 'speaker'
  if (deviceName.includes('tv') || modelName.includes('tv')) {
    deviceType = 'tv'
  }

  if (deviceType === 'tv') return <TVTile entity={entity} device={device} />
  return <AudioTile entity={entity} />
}
