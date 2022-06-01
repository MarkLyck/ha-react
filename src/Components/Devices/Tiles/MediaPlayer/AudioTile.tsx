import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'
import useStore from 'src/lib/useStore'

const AudioTile = ({ entity }: any) => {
  const { sendSocket } = useStore()
  const INACTIVE_STATES = ['off', 'idle', 'paused']
  const isActive = !INACTIVE_STATES.includes(entity.state)

  const { friendly_name } = entity.attributes

  const onPress = async () => {
    if (!isActive) {
      await sendSocket({
        domain: 'media_player',
        service: 'media_play',
        service_data: { entity_id: entity.entity_id },
        type: 'call_service',
      })
    } else {
      await sendSocket({
        domain: 'media_player',
        service: 'media_stop',
        service_data: { entity_id: entity.entity_id },
        type: 'call_service',
      })
    }
  }

  return (
    <>
      <AccessoryCard
        onPress={onPress}
        name={friendly_name}
        isActive={isActive}
        state={entity.state}
      />
    </>
  )
}

export default AudioTile
