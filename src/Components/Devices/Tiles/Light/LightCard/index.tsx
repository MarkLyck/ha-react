import React, { FC, ReactNode } from 'react'

// @ts-ignore
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'
import { useModalHelper } from 'src/Components/Devices/Tiles/common/hooks'
import { Capabilities } from 'src/Components/Devices/Tiles/common/types'
import { LightCardModal } from './LightCardModal'
import LightBulbIcon from 'src/assets/icons/devices/light_bulb.svg'
import LedStripIcon from 'src/assets/icons/devices/led_strip.svg'

interface LightCardProps {
  /** Custom icon for active light */
  readonly iconActive?: ReactNode
  /** Custom icon for inactive light */
  readonly iconInactive?: ReactNode
  /** Action triggered on press */
  readonly onToggle?: () => void
  /** Action triggered when brightness change */
  readonly onBrightnessChange?: (value: number) => void
  /** State of the light */
  readonly on: boolean
  /** Name of the light */
  readonly name: string
  /** Brightness of the light */
  readonly brightness?: number
  /** Capabilities of the light (dimmable, color, ...) */
  readonly capabilities?: Capabilities
}

export const LightCard: FC<LightCardProps> = ({
  capabilities = {
    SUPPORT_BRIGHTNESS: false,
    SUPPORT_COLOR: false,
  },
  brightness,
  iconActive,
  iconInactive,
  name,
  on,
  onToggle,
  onBrightnessChange,
}) => {
  const { showModal, openModal, closeModal } = useModalHelper()

  const stateLabel = on ? (brightness ? `${brightness}%` : 'On') : 'Off'

  return (
    <React.Fragment>
      <AccessoryCard
        iconActive={iconActive ? iconActive : <LightBulbIcon />}
        iconInactive={iconInactive ? iconInactive : <LightBulbIcon />}
        name={name}
        state={stateLabel}
        isActive={on}
        onPress={onToggle}
        onLongPress={openModal}
      />
      <LightCardModal
        name={name}
        state={stateLabel}
        capabilities={capabilities}
        on={on}
        onToggle={onToggle}
        brightness={brightness}
        onBrightnessChange={onBrightnessChange}
        show={showModal}
        close={closeModal}
      />
    </React.Fragment>
  )
}
