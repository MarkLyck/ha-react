import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type PressureSensorProps = {
  entityId: string
}

export const PressureSensor = ({ entityId }: PressureSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const pressure = entity.state

  return (
    <SensorCardMini
      icon={<FontAwesomeIcon icon={['fas', 'weight-hanging']} />}
      state={`${pressure} hPa`}
    />
  )
}
