// import { LightCard as HomekitLightCard } from './VacuumCard'
import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import { AccessoryCard } from 'src/Components/Cards/common/AccessoryCard'
import { useModalHelper } from 'src/Components/Cards/common/hooks'
// @ts-ignore
import VacuumIcon from './vacuum.svg?component'
import VacuumModal from './VacuumModal'

type VacuumCardProps = {
  hass: any
  entityId: string
}

const Vacuum = ({ hass, entityId }: VacuumCardProps) => {
  const { showModal, openModal, closeModal } = useModalHelper()
  const entity = hass.states[entityId]
  console.log('🔈 ~ entity', entity)

  if (!entityId) {
    return <Alert message="Missing entityId" type="error" showIcon />
  }

  if (!entity) {
    return (
      <Alert
        message={`Entity with id "${entityId}" not found`}
        type="error"
        showIcon
      />
    )
  }

  const { friendly_name } = entity.attributes
  // check what this actually will be.
  const isActive = entity.state === 'on'

  const onPress = () => {
    if (isActive) {
      hass.callService('vacuum', 'turn_off', {
        entity_id: entityId,
      })
    } else {
      hass.callService('vacuum', 'turn_on', {
        entity_id: entityId,
      })
    }
  }

  return (
    <div>
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
    </div>
  )
}

export const VacuumCard = (props: VacuumCardProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Vacuum {...props} />
  </ErrorBoundary>
)
