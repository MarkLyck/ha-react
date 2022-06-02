import useStore from 'src/lib/useStore'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'
import OutletIcon from 'src/assets/icons/devices/outlet.svg'

type MediaPlayerTileProps = {
  entityId: string
}

export const SwitchTile = ({ entityId }: MediaPlayerTileProps) => {
  const { states, sendSocket } = useStore((state: any) => ({
    states: state.states,
    sendSocket: state.sendSocket,
  }))
  const entity = states[entityId]

  const handleToggle = async () => {
    await sendSocket({
      domain: 'switch',
      service: 'toggle',
      service_data: { entity_id: entityId },
      type: 'call_service',
    })
  }

  return (
    <AccessoryCard
      iconActive={<OutletIcon />}
      iconInactive={<OutletIcon />}
      onPress={handleToggle}
      name={entity.attributes.friendly_name}
      isActive={entity.state === 'on'}
      state={entity.state}
    />
  )
}
