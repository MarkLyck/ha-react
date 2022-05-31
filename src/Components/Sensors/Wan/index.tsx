import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SensorCard from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b`
  margin-left: 8px;
`

type WanStatusSensorProps = {
  entityId: string
}

export const WifiSensor = ({ entityId }: WanStatusSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const status = entity.state

  return (
    <SensorCard>
      <FontAwesomeIcon icon={['far', 'wifi']} />
      <Text>{status}</Text>
    </SensorCard>
  )
}
