import { useState } from 'react'
import { LightCard as HomekitLightCard } from './LightCard'
import useStore from 'src/lib/useStore'

type HassLightCardProps = {
  entityId: string
}

const Light = ({ entityId }: HassLightCardProps) => {
  const { states, sendSocket } = useStore((state: any) => ({
    states: state.states,
    sendSocket: state.sendSocket,
  }))
  const entity = states[entityId]
  const [isOn, setIsOn] = useState(
    entity.state && entity.state !== 'off' && entity.state != 'unavailable'
  )
  const [brightness, setBrightness] = useState(entity.attributes.brightness)
  const brightnessPercentage = Math.floor((brightness * 100) / 255)

  function handleToggle() {
    setIsOn(!isOn)
    sendSocket({
      domain: 'light',
      service: 'toggle',
      service_data: { entity_id: entityId },
      type: 'call_service',
    })
  }

  function handlePercentageChange(value: number) {
    const newBrightness = Math.floor((value * 255) / 100)
    setBrightness(newBrightness)
    sendSocket({
      domain: 'light',
      service: 'turn_on',
      service_data: {
        entity_id: entityId,
        brightness_pct: Math.floor((newBrightness * 100) / 255),
      },
      type: 'call_service',
    })
  }

  return (
    <HomekitLightCard
      name={entity.attributes.friendly_name}
      on={isOn}
      brightness={brightnessPercentage}
      onBrightnessChange={handlePercentageChange}
      onToggle={handleToggle}
      capabilities={{
        SUPPORT_BRIGHTNESS: true,
      }}
    />
  )
}

export const LightCard = Light
