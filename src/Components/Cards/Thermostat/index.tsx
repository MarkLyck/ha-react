import { useState } from 'react'
import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'

import { ThermostatCard as HomekitThermostatCard } from './ThermostatCard'

type ThermostatCardCardProps = {
  hass: any
  entityId: string
}

const Thermostat = ({ hass, entityId }: ThermostatCardCardProps) => {
  const entity = hass.states[entityId]
  console.log('🔈 ~ entity', entity)
  const [currentMode, setCurrentMode] = useState(entity?.state || 'off')
  const [targetTemperature, setTargetTemperature] = useState(
    entity?.attributes?.temperature || 0
  )
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

  const handleTemperatureChange = (value: number) => {
    setTargetTemperature(value)
    hass.callService('climate', 'set_temperature', {
      entity_id: entity.entity_id,
      temperature: Math.floor(value),
    })
  }

  const handleModeChange = (value: string) => {
    setCurrentMode(value)
    hass.callService('climate', 'set_hvac_mode', {
      entity_id: entity.entity_id,
      hvac_mode: value,
    })
  }

  return (
    <HomekitThermostatCard
      entity={entity}
      name={entity.attributes.friendly_name}
      currentMode={currentMode}
      targetTemperature={targetTemperature}
      onModeChange={handleModeChange}
      onTemperatureChange={handleTemperatureChange}
    />
  )
}

export const ThermostatCard = (props: ThermostatCardCardProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Thermostat {...props} />
  </ErrorBoundary>
)
