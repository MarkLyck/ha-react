import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCard } from '../Card'
import useStore from 'src/lib/useStore'

type DoorWindowSensorProps = {
  entityId: string
}

export const DoorWindowSensor = ({ entityId }: DoorWindowSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const isOpen = entity.state === 'on'

  let icon = isOpen ? 'door-open' : 'door-closed'

  if (entity.attributes.friendly_name.includes('window')) {
    icon = 'window-frame-open'
  }

  return (
    <SensorCard
      name={entity.attributes.friendly_name}
      // @ts-ignore
      icon={<FontAwesomeIcon icon={['fas', icon]} />}
      state={isOpen ? 'open' : 'closed'}
    />
  )
}
