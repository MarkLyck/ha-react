import useStore from 'src/lib/useStore'
import SensorCard from './Card'

export const FallbackSensor = ({ entityId }: any) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  return (
    <SensorCard>
      <b>{entity.state}</b>
    </SensorCard>
  )
}
