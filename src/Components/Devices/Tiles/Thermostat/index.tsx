import { useState } from 'react'
import useStore from 'src/lib/useStore'

import { ThermostatCard as HomekitThermostatCard } from './ThermostatCard'

type ThermostatCardCardProps = {
  entityId: string
}

const Thermostat = ({ entityId }: ThermostatCardCardProps) => {
  const { states, sendSocket } = useStore((state: any) => ({
    states: state.states,
    sendSocket: state.sendSocket,
  }))
  const entity = states[entityId]

  const [currentMode, setCurrentMode] = useState(entity?.state || 'off')
  const [targetTemperature, setTargetTemperature] = useState(
    entity?.attributes?.temperature || 0
  )

  const handleTemperatureChange = (value: number) => {
    setTargetTemperature(value)
    sendSocket({
      domain: 'climate',
      service: 'set_temperature',
      service_data: { entity_id: entityId, temperature: Math.floor(value) },
      type: 'call_service',
    })
  }

  const handleModeChange = async (mode: string) => {
    setCurrentMode(mode)
    await sendSocket({
      domain: 'climate',
      service: 'set_hvac_mode',
      service_data: {
        entity_id: entityId,
        hvac_mode: mode,
      },
      type: 'call_service',
    })
    if (mode !== 'off') {
      let newTemp = Math.floor(entity.attributes.current_temperature)
      setTargetTemperature(newTemp)
      window.setTimeout(() => {
        sendSocket({
          domain: 'climate',
          service: 'set_temperature',
          service_data: { entity_id: entityId, temperature: newTemp },
          type: 'call_service',
        })
      }, 200)
    }
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

export const ThermostatCard = Thermostat
