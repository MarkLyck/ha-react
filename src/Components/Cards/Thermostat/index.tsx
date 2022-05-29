import React from 'react'
import { Alert } from 'antd'
import { ThermostatCard as HomekitThermostatCard } from './ThermostatCard'

type ThermostatCardCardProps = {
  hass: any
  entityId: string
}

export const ThermostatCard = ({ hass, entityId }: ThermostatCardCardProps) => {
  const entity = hass.states[entityId]
  console.log('🔈 ~ entity', entity)
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

  const { friendly_name, occupied_heating_setpoint } = entity.attributes

  const handleTemperatureChange = (value: number) => {
    hass.callService('climate', 'set_temperature', {
      entity_id: entity.entity_id,
      temperature: value,
    })
  }

  const handleModeChange = (value: string) => {
    hass.callService('climate', 'set_hvac_mode', {
      entity_id: entity.entity_id,
      hvac_mode: value.toLowerCase(),
    })
  }

  return (
    <React.Fragment>
      <HomekitThermostatCard
        entity={entity}
        name={friendly_name}
        currentMode={entity.state}
        currentTemperature={occupied_heating_setpoint}
        targetTemperature={occupied_heating_setpoint}
        onModeChange={handleModeChange}
        onTemperatureChange={handleTemperatureChange}
      />
    </React.Fragment>
  )
}
