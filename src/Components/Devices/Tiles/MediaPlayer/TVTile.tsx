import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'
import useStore from 'src/lib/useStore'
import TVIcon from 'src/assets/icons/devices/tv.svg'
import AppleTVIcon from 'src/assets/icons/devices/apple_tv.svg'

import {
  ActionsContainer,
  ActionButton,
} from 'src/Components/Devices/Tiles/common/Actions'

import { SourceButton } from './Actions'

const TVTile = ({ entity, device }: any) => {
  const { sendSocket } = useStore((state: any) => ({
    sendSocket: state.sendSocket,
  }))
  const INACTIVE_STATES = ['standby', 'off', 'idle']
  const isActive = !INACTIVE_STATES.includes(entity.state)

  let Icon = TVIcon
  // const deviceName = device.name.toLowerCase()
  const modelName = device.model.toLowerCase()

  if (modelName.includes('apple tv')) {
    Icon = AppleTVIcon
  }
  const { friendly_name } = entity.attributes

  const onPress = async () => {
    if (isActive) {
      await sendSocket({
        domain: 'media_player',
        service: 'turn_off',
        service_data: { entity_id: entity.entity_id },
        type: 'call_service',
      })
    } else {
      await sendSocket({
        domain: 'media_player',
        service: 'turn_on',
        service_data: { entity_id: entity.entity_id },
        type: 'call_service',
      })
    }
  }

  let state = entity.state
  if (state === 'playing' && entity.attributes.media_title) {
    state = entity.attributes.media_title
  }

  return (
    <AccessoryCard
      iconActive={<Icon />}
      iconInactive={<Icon />}
      onPress={onPress}
      name={friendly_name}
      isActive={isActive}
      state={state}
      backgroundImage={undefined}
    >
      {/* {entity.state === 'idle' && (
        <ActionsContainer>
          <SourceButton entity={entity} />
        </ActionsContainer>
      )} */}
      {entity.state === 'playing' && (
        <ActionsContainer>
          <SourceButton entity={entity} />
          <ActionButton>
            <FontAwesomeIcon icon={['fas', 'pause']} />
          </ActionButton>
        </ActionsContainer>
      )}
    </AccessoryCard>
  )
}

export default TVTile
