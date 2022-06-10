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

  let icon = 'router'

  if (entity.attributes.friendly_name === 'Internet') {
    icon = 'globe'
  }

  return (
    <SensorCard
      name={entity.attributes.friendly_name}
      // @ts-ignore
      icon={<FontAwesomeIcon icon={['fas', icon]} />}
      state={status}
    />
  )
}
