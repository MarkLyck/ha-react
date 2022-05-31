import { useState } from 'react'
import CardWrapper from '../common/CardWrapper'

import { ThermostatCard as HomekitThermostatCard } from './ThermostatCard'

type ThermostatCardCardProps = {
  hass: any
  entityId: string
}

const Thermostat = ({ hass, entityId }: ThermostatCardCardProps) => {
  const entity = hass.states[entityId]
  const [currentMode, setCurrentMode] = useState(entity?.state || 'off')
  const [targetTemperature, setTargetTemperature] = useState(
    entity?.attributes?.temperature || 0
  )

  const handleTemperatureChange = (value: number) => {
    setTargetTemperature(value)
    hass.callService('climate', 'set_temperature', {
      entity_id: entity.entity_id,
      temperature: Math.floor(value),
    })
  }

  const handleModeChange = (value: string) => {
    let newTemp = Math.floor(entity.attributes.current_temperature)
    setCurrentMode(value)
    setTargetTemperature(newTemp)

    hass.callService('climate', 'set_hvac_mode', {
      entity_id: entity.entity_id,
      hvac_mode: value,
      temperature: newTemp,
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

export const ThermostatCard = CardWrapper(Thermostat)
