import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCard } from '../Card'
import useStore from 'src/lib/useStore'

type WanStatusSensorProps = {
  entityId: string
}

export const WifiSensor = ({ entityId }: WanStatusSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const status = entity.state

  return (
    <SensorCard
      name={entity.attributes.friendly_name}
      icon={<FontAwesomeIcon icon={['far', 'wifi']} />}
      state={status}
    />
  )
}
