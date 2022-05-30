import { Alert } from 'antd'
import styled from '@emotion/styled'
import { ErrorBoundary } from 'react-error-boundary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SensorCard from '../Card'

const Text = styled.b`
  margin-left: 8px;
`

type TemperatureSensorProps = {
  hass: any
  entityId: string
}

const Sensor = ({ hass, entityId }: TemperatureSensorProps) => {
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

  const temperature = entity.state

  console.log('🔈 ~ entity', entity)
  return (
    <SensorCard>
      <FontAwesomeIcon icon={['fal', 'temperature-half']} />
      <Text>{Number(temperature).toFixed(0)}°</Text>
    </SensorCard>
  )
}

export const TemperatureSensor = (props: TemperatureSensorProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Sensor {...props} />
  </ErrorBoundary>
)
