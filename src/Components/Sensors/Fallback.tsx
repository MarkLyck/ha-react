import useStore from 'src/lib/useStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCard } from './Card'

export const FallbackSensor = ({ entityId }: any) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  return (
    <SensorCard
      name={entity.attributes.friendly_name}
      icon={<FontAwesomeIcon icon={['far', 'sensor']} />}
      state={entity.state}
    />
  )
}
