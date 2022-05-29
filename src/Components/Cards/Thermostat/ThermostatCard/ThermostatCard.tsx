import React, { FC } from 'react'

import { AccessoryCard } from '../../common/AccessoryCard'
import { useModalHelper } from '../../common/hooks'
import { TemperatureIcon } from './TemperatureIcon'
import { ThermostatCardModal } from './ThermostatCardModal'

interface ThermostatCardProps {
  readonly entity: any
  /** Current mode */
  readonly currentMode: string
  /** Current temperature */
  readonly currentTemperature: number
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
  currentTemperature,
  modes = ['off', 'heat', 'cool'],
  name,
  onModeChange,
  onTemperatureChange,
  targetTemperature,
}) => {
  const { showModal, openModal, closeModal } = useModalHelper()

  let statusLabel = 'Off'
  if (entity.state === 'heat')
    statusLabel = `Heat to ${entity.attributes.temperature}°`
  if (entity.state === 'cool')
    statusLabel = `Cool to ${entity.attributes.temperature}°`

  return (
    <React.Fragment>
      <AccessoryCard
        iconActive={
          <TemperatureIcon
            temperature={targetTemperature}
            state={entity.state}
          />
        }
        iconInactive={
          <TemperatureIcon
            temperature={currentTemperature}
            state={entity.state}
          />
        }
        name={name}
        state={statusLabel}
        isActive={entity.state !== 'off'}
        handlePress={openModal}
        handleLongPress={openModal}
      />
      <ThermostatCardModal
        name={name}
        statusLabel={statusLabel}
        currentMode={entity.state}
        modes={modes}
        onModeChange={onModeChange}
        tempMax={Math.floor(entity.attributes.max_temp)}
        tempMin={Math.ceil(entity.attributes.min_temp)}
        currentTemperature={entity.attributes.current_temperature}
        targetTemperature={targetTemperature}
        onTemperatureChange={onTemperatureChange}
        show={showModal}
        close={closeModal}
      />
    </React.Fragment>
  )
}
