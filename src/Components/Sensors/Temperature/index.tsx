import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type TemperatureSensorProps = {
  entityId: string
}

export const TemperatureSensor = ({ entityId }: TemperatureSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const temperature = entity.state

  return (
    <SensorCardMini
      icon={<FontAwesomeIcon icon={['fas', 'temperature-half']} />}
      state={`${Number(temperature).toFixed(0)}°`}
    />
  )
}
