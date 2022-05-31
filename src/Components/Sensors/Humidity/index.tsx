import styled from '@emotion/styled'
import SensorCard from '../Card'
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
    <SensorCard>
      <Text>💧 {Number(Humidity).toFixed(0)}%</Text>
    </SensorCard>
  )
}
