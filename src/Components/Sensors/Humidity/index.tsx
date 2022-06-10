import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type HumiditySensorProps = {
  entityId: string
}

export const HumiditySensor = ({ entityId }: HumiditySensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const humidity = entity.state

  return (
    <SensorCardMini
      icon={<FontAwesomeIcon icon={['fas', 'droplet']} />}
      state={`${Number(humidity).toFixed(0)}%`}
    />
  )
}
