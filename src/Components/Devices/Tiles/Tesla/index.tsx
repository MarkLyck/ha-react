import styled from '@emotion/styled'
import useStore from 'src/lib/useStore'
import { AccessoryCard } from '../common/AccessoryCard'
import TeslaLogo from 'src/assets/icons/devices/tesla.svg'
import { Battery } from 'src/ui-components'

const BatteryContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const TeslaTile = () => {
  const { states } = useStore((state: any) => ({ states: state.states }))
  const batterySensorId = 'sensor.tesla_battery_sensor'
  const chargerSensorId = 'binary_sensor.tesla_charger_sensor'

  const batteryPercentage = Number(states[batterySensorId].state)
  const isCharging = states[chargerSensorId].state === 'on'

  return (
    <AccessoryCard
      isActive={isCharging}
      name="model Y"
      state={`${isCharging ? 'charging - ' : ''}${batteryPercentage}%`}
      iconActive={<TeslaLogo />}
      iconInactive={<TeslaLogo />}
    >
      <BatteryContainer>
        <Battery
          percentage={batteryPercentage}
          showNumber={false}
          isCharging={isCharging}
        />
      </BatteryContainer>
    </AccessoryCard>
  )
}
