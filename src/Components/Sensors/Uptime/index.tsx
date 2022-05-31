import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import SensorCard from '../Card'
import useStore from 'src/lib/useStore'

const Text = styled.b`
  margin-left: 8px;
`

type UptimeStatusSensorProps = {
  entityId: string
}

export const UptimeSensor = ({ entityId }: UptimeStatusSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const timeInMiliseconds = entity.state
  const timeInSeconds = timeInMiliseconds / 1000
  const timeInMinutes = timeInSeconds / 60
  const timeInHours = timeInMinutes / 60
  const timeInDays = timeInHours / 24

  let time = timeInMinutes
  let timeText = 'minutes'
  if (timeInHours > 1) {
    time = Math.floor(timeInHours)
    timeText = `hour${time > 1 ? 's' : ''}`
  }
  if (timeInDays > 1) {
    time = Math.floor(timeInDays)
    timeText = `day${time > 1 ? 's' : ''}`
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={['far', 'timer']} />
      <Text>
        {time} {timeText}
      </Text>
    </SensorCard>
  )
}
