import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type MotionSensorProps = {
  entityId: string
}

export const MotionSensor = ({ entityId }: MotionSensorProps) => {
  const states = useStore((state: any) => state?.states)
  const entity = states[entityId]
  if (!entity) return null

  const detected = entity.state === 'on'

  return (
    <SensorCardMini
      icon={<FontAwesomeIcon icon={['fas', 'person-walking']} />}
      state={detected ? 'detected' : 'clear'}
    />
  )
}
