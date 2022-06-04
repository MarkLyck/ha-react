import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b``

type HumiditySensorProps = {
  entityId: string
}

export const HumiditySensor = ({ entityId }: HumiditySensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const Humidity = entity.state

  return (
    <SensorCardMini>
      <Text>
        <FontAwesomeIcon icon={['fas', 'droplet']} />{' '}
        {Number(Humidity).toFixed(0)}%
      </Text>
    </SensorCardMini>
  )
}
