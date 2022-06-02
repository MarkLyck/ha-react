import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b`
  margin-left: 8px;
`

type OccupancySensorProps = {
  entityId: string
}

export const OccupancySensor = ({ entityId }: OccupancySensorProps) => {
  const states = useStore((state: any) => state?.states)
  const entity = states[entityId]
  if (!entity) return null

  const occupied = entity.state === 'on'

  return (
    <SensorCardMini>
      <FontAwesomeIcon icon={['far', 'person-walking']} />
      <Text>{occupied ? 'Occupied' : 'Empty'}</Text>
    </SensorCardMini>
  )
}
