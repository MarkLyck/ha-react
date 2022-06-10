import { useState } from 'react'
import styled from '@emotion/styled'
import useStore from 'src/lib/useStore'
import { useModalHelper } from 'src/Components/Devices/Tiles/common/hooks'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'

import { LightCardModal } from './LightCardModal'
import LightBulbIcon from 'src/assets/icons/devices/light_bulb.svg'
import LedStripIcon from 'src/assets/icons/devices/led_strip.svg'

const LightIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: ${(p: { isActive: boolean }) =>
    p.isActive ? 'rgba(0,0,0,0.05)' : 'black'};
  display: flex;
  align-items: center;
  justify-content: center;

  && {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`

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
  console.log('🔈 ~ entity', entity)

  // const supportedFeatures = getSupportedFeatures(
  //   entity.attributes.supported_features,
  //   LIGHT_FEATURES
  // )

  const [isOn, setIsOn] = useState(
    entity.state && entity.state !== 'off' && entity.state !== 'unavailable'
  )
  const [brightness, setBrightness] = useState(
    Math.floor((entity.attributes.brightness * 100) / 255)
  )
  const { showModal, openModal, closeModal } = useModalHelper()

  const stateLabel = isOn ? (brightness ? `${brightness}%` : 'On') : 'Off'

  const brightnessPercentage = brightness

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
    setBrightness(value)
    sendSocket({
      domain: 'light',
      service: 'turn_on',
      service_data: {
        entity_id: entityId,
        brightness_pct: value,
      },
      type: 'call_service',
    })
  }

  const name = entity.attributes.friendly_name

  return (
    <>
      <AccessoryCard
        iconActive={
          <LightIconContainer isActive={isOn}>
            <LightBulbIcon />
          </LightIconContainer>
        }
        iconInactive={
          <LightIconContainer isActive={isOn}>
            <LightBulbIcon />
          </LightIconContainer>
        }
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
        brightness={brightnessPercentage}
        onBrightnessChange={handlePercentageChange}
        show={showModal}
        close={closeModal}
      />
    </>
  )
}

export const LightCard = Light
