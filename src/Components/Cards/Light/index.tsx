import { useState } from 'react'
import { LightCard as HomekitLightCard } from './LightCard'
import { Alert } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'

type HassLightCardProps = {
  hass: any
  entityId: string
}

const Light = ({ hass, entityId }: HassLightCardProps) => {
  const entity = hass.states[entityId]
  const [isOn, setIsOn] = useState(
    entity.state && entity.state !== 'off' && entity.state != 'unavailable'
  )
  const [brightness, setBrightness] = useState(entity.attributes.brightness)

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

  const brightnessPercentage = Math.floor((brightness * 100) / 255)

  function handleToggle() {
    setIsOn(!isOn)
    hass.callService('light', 'toggle', {
      entity_id: entity.entity_id,
    })
  }

  function handlePercentageChange(value: number) {
    const newBrightness = Math.floor((value * 255) / 100)
    setBrightness(newBrightness)
    hass.callService('light', 'turn_on', {
      entity_id: entityId,
      brightness: newBrightness,
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

export const LightCard = (props: HassLightCardProps) => (
  <ErrorBoundary
    fallback={<Alert message={'Something went wrong'} type="error" showIcon />}
  >
    <Light {...props} />
  </ErrorBoundary>
)
