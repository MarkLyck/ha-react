import { LightCard as HomekitLightCard } from 'homekit-react-components'
import { Alert } from 'antd'

type HassLightCardProps = {
  hass: any
  entityId: string
}

export const LightCard = ({ hass, entityId }: HassLightCardProps) => {
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

  const { friendly_name, brightness } = entity.attributes
  const on =
    entity.state && entity.state !== 'off' && entity.state != 'unavailable'
  const brightnessPercentage = Math.floor((brightness * 100) / 255)

  function handleToggle() {
    hass.callService('light', 'toggle', {
      entity_id: entity.entity_id,
    })
  }

  function handlePercentageChange(value: number) {
    const brightness = Math.floor((value * 255) / 100)
    hass.callService('light', 'turn_on', {
      entity_id: entityId,
      brightness: brightness,
    })
  }

  return (
    <HomekitLightCard
      name={friendly_name}
      on={on}
      brightness={brightnessPercentage}
      onBrightnessChange={handlePercentageChange}
      onToggle={handleToggle}
      capabilities={{
        SUPPORT_BRIGHTNESS: true,
      }}
    />
  )
}
