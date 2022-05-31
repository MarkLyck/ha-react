import { useState } from 'react'
import { AccessoryCard } from 'src/Components/Tiles/common/AccessoryCard'
import { useModalHelper } from 'src/Components/Tiles/common/hooks'
import useStore from 'src/lib/useStore'
// @ts-ignore
import VacuumIcon from './vacuum.svg?component'
import VacuumModal from './VacuumModal'

type VacuumCardProps = {
  entityId: string
}

const INACTIVE_STATES = ['idle', 'paused', 'docked', 'unknown']

const Vacuum = ({ entityId }: VacuumCardProps) => {
  const { states, sendSocket } = useStore((state: any) => ({
    states: state.states,
    sendSocket: state.sendSocket,
  }))
  const entity = states[entityId]
  console.log('🔈 ~ entity', entity)
  const [loading, setLoading] = useState(false)
  const [isActive, setisActive] = useState(
    !INACTIVE_STATES.includes(entity.state)
  )
  const { showModal, openModal, closeModal } = useModalHelper()

  const { friendly_name } = entity.attributes

  const onPress = async () => {
    setisActive(!isActive)
    setLoading(true)
    if (!isActive) {
      await sendSocket({
        domain: 'vacuum',
        service: 'start',
        service_data: { entity_id: entityId },
        type: 'call_service',
      })
    } else {
      await sendSocket({
        domain: 'vacuum',
        service: 'stop',
        service_data: { entity_id: entityId },
        type: 'call_service',
      })
    }
    setLoading(false)
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
        loading={loading}
      />
      <VacuumModal visible={showModal} close={closeModal} entity={entity} />
    </>
  )
}

export const VacuumCard = Vacuum
