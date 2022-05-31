import useStore from 'src/lib/useStore'

import TVTile from './TVTile'
import AudioTile from './AudioTile'

type MediaPlayerTileProps = {
  entityId: string
}

export const MediaPlayerTile = ({ entityId }: MediaPlayerTileProps) => {
  const { states } = useStore()
  const entity = states[entityId]
  const deviceType = entity.attributes.source_list ? 'TV' : 'AUDIO'

  if (deviceType === 'TV') return <TVTile entity={entity} />
  return <AudioTile entity={entity} />
}
