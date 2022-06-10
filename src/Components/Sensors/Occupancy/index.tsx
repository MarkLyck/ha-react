import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type OccupancySensorProps = {
  entityId: string
}

export const OccupancySensor = ({ entityId }: OccupancySensorProps) => {
  const states = useStore((state: any) => state?.states)
  const entity = states[entityId]
  if (!entity) return null

  const occupied = entity.state === 'on'

  return (
    <SensorCardMini
      icon={<FontAwesomeIcon icon={['fas', 'person-walking']} />}
      state={occupied ? 'Occupied' : 'Empty'}
    />
  )
}
