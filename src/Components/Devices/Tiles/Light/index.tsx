import { useState } from 'react'
import useStore from 'src/lib/useStore'
import { useModalHelper } from 'src/Components/Devices/Tiles/common/hooks'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'

import { LightCardModal } from './LightCardModal'
import LightBulbIcon from 'src/assets/icons/devices/light_bulb.svg'
import LedStripIcon from 'src/assets/icons/devices/led_strip.svg'

// import getSupportedFeatures from 'src/common/supportedFeatures'
// import LIGHT_FEATURES from 'src/common/features/light.json'

type HassLightCardProps = {
  entityId: string
}

const Light = ({ entityId }: HassLightCardProps) => {
  const { states, sendSocket } = useStore((state: any) => ({
    states: state.states,
    sendSocket: state.sendSocket,
  }))
  const entity = states[entityId]

  // const supportedFeatures = getSupportedFeatures(
  //   entity.attributes.supported_features,
  //   LIGHT_FEATURES
  // )

  const [isOn, setIsOn] = useState(
    entity.state && entity.state !== 'off' && entity.state !== 'unavailable'
  )
  const [brightness, setBrightness] = useState(entity.attributes.brightness)
  const { showModal, openModal, closeModal } = useModalHelper()

  const stateLabel = isOn ? (brightness ? `${brightness}%` : 'On') : 'Off'

  // const brightnessPercentage = Math.floor((brightness * 100) / 255)

  const handleToggle = async () => {
    setIsOn(!isOn)
    await sendSocket({
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

  const name = entity.attributes.friendly_name

  return (
    <>
      <AccessoryCard
        iconActive={<LightBulbIcon />}
        iconInactive={<LightBulbIcon />}
        name={name}
        state={entity.state}
        isActive={isOn}
        onPress={handleToggle}
        onLongPress={openModal}
      />
      <LightCardModal
        name={name}
        state={stateLabel}
        on={isOn}
        onToggle={handleToggle}
        brightness={brightness}
        onBrightnessChange={handlePercentageChange}
        show={showModal}
        close={closeModal}
      />
    </>
  )
}

export const LightCard = Light
