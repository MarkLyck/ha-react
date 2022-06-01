import React, { FC } from 'react'

import { AccessoryCard } from '../../common/AccessoryCard'
import { useModalHelper } from '../../common/hooks'
import { TemperatureIcon } from './TemperatureIcon'
import { ThermostatCardModal } from './ThermostatCardModal'

interface ThermostatCardProps {
  readonly entity: any
  /** Current mode */
  readonly currentMode: string
  /** Modes available */
  readonly modes?: string[]
  /** Name of the thermostat */
  readonly name: string
  /** Action triggered when mode change */
  readonly onModeChange?: (value: string) => void
  /** Action triggered when temperature change */
  readonly onTemperatureChange: (value: number) => void
  /** Target temperature */
  readonly targetTemperature: number
  /** Temperature max */
  readonly tempMax?: number
  /** Temperature min */
  readonly tempMin?: number
}

export const ThermostatCard: FC<ThermostatCardProps> = ({
  entity,
  currentMode,
  modes = ['off', 'heat', 'cool'],
  name,
  onModeChange,
  onTemperatureChange,
  targetTemperature,
}) => {
  const { showModal, openModal, closeModal } = useModalHelper()
  const currentTemperature = entity.attributes.current_temperature
  const isOn = currentMode !== 'off'

  let statusLabel = 'Off'
  if (currentMode === 'heat')
    statusLabel = `Heat to ${Number(targetTemperature).toFixed(0)}°`
  if (currentMode === 'cool')
    statusLabel = `Cool to ${Number(targetTemperature).toFixed(0)}°`
  if (currentMode === 'heat_cool') statusLabel = `Auto`

  return (
    <React.Fragment>
      <AccessoryCard
        iconActive={
          <TemperatureIcon
            temperature={isOn ? targetTemperature : currentTemperature}
            state={currentMode}
          />
        }
        iconInactive={
          <TemperatureIcon
            temperature={isOn ? targetTemperature : currentTemperature}
            state={currentMode}
          />
        }
        name={name}
        state={statusLabel}
        isActive={currentMode !== 'off'}
        onPress={openModal}
        onLongPress={openModal}
      />
      <ThermostatCardModal
        name={name}
        statusLabel={statusLabel}
        currentMode={currentMode}
        modes={modes}
        onModeChange={onModeChange}
        tempMax={Math.floor(entity.attributes.max_temp)}
        tempMin={Math.ceil(entity.attributes.min_temp)}
        currentTemperature={currentTemperature}
        targetTemperature={targetTemperature}
        onTemperatureChange={onTemperatureChange}
        show={showModal}
        close={closeModal}
      />
    </React.Fragment>
  )
}
