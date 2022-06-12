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

  const status = entity.state

  let icon = 'door-open'

  if (entity.attributes.friendly_name.includes('window')) {
    icon = 'window-frame-open'
  }

  return (
    <SensorCard
      name={entity.attributes.friendly_name}
      // @ts-ignore
      icon={<FontAwesomeIcon icon={['fas', icon]} />}
      state={status === 'on' ? 'open' : 'closed'}
    />
  )
}
