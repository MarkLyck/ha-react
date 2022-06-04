import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b`
  margin-left: 8px;
`

type TemperatureSensorProps = {
  entityId: string
}

export const TemperatureSensor = ({ entityId }: TemperatureSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const temperature = entity.state

  return (
    <SensorCardMini>
      <FontAwesomeIcon icon={['fas', 'temperature-half']} />
      <Text>{Number(temperature).toFixed(0)}°</Text>
    </SensorCardMini>
  )
}
