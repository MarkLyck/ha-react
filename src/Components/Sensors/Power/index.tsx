import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b`
  margin-left: 8px;
`

type PowerSensorProps = {
  entityId: string
}

export const PowerSensor = ({ entityId }: PowerSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const status = entity.state

  return (
    <SensorCardMini>
      <FontAwesomeIcon icon={['far', 'power-off']} />
      <Text>{status}</Text>
    </SensorCardMini>
  )
}
