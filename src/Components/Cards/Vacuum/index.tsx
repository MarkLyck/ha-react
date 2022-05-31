// import { LightCard as HomekitLightCard } from './VacuumCard'
import { AccessoryCard } from 'src/Components/Cards/common/AccessoryCard'
import { useModalHelper } from 'src/Components/Cards/common/hooks'
// @ts-ignore
import VacuumIcon from './vacuum.svg?component'
import CardWrapper from '../common/CardWrapper'
import VacuumModal from './VacuumModal'

type VacuumCardProps = {
  hass: any
  entityId: string
}

const Vacuum = ({ hass, entityId }: VacuumCardProps) => {
  const { showModal, openModal, closeModal } = useModalHelper()
  const entity = hass.states[entityId]

  const { friendly_name } = entity.attributes
  // check what this actually will be.
  const isActive = entity.state === 'on'

  const onPress = () => {
    if (isActive) {
      hass.callService('homeassistant', 'turn_off', {
        entity_id: entityId,
      })
    } else {
      hass.callService('homeassistant', 'turn_on', {
        entity_id: entityId,
      })
    }
  }

  return (
    <>
      <AccessoryCard
        iconActive={<VacuumIcon />}
        iconInactive={<VacuumIcon />}
        onPress={onPress}
        onLongPress={openModal}
        name={friendly_name}
        isActive={isActive}
        state={entity.state}
      />
      <VacuumModal visible={showModal} close={closeModal} entity={entity} />
    </>
  )
}

export const VacuumCard = CardWrapper(Vacuum)
