import { Alert } from 'antd'
import styled from '@emotion/styled'
import { ErrorBoundary } from 'react-error-boundary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SensorCard from '../Card'

const Text = styled.b`
  margin-left: 8px;
`

type OccupancySensorProps = {
  hass: any
  entityId: string
}

const Sensor = ({ hass, entityId }: OccupancySensorProps) => {
  const entity = hass.states[entityId]
  if (!entityId) {
    return <Alert message="Missing entityId" type="error" showIcon />
  }
  if (!entity) {
    return (
      <Alert
        message={`Entity with id "${entityId}" not found`}
        type="error"
        showIcon
      />
    )
  }

  const occupied = entity.state

  return (
    <SensorCard>
      <FontAwesomeIcon icon={['fal', 'person-walking']} />
      <Text>{occupied ? 'Occupied' : 'empty'}</Text>
    </SensorCard>
  )
}

export const OccupancySensor = (props: OccupancySensorProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Sensor {...props} />
  </ErrorBoundary>
)
