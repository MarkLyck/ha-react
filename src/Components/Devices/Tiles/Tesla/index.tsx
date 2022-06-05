import styled from '@emotion/styled'
import useStore from 'src/lib/useStore'
import { AccessoryCard } from '../common/AccessoryCard'
import TeslaLogo from 'src/assets/icons/devices/tesla.svg'
import { Battery } from 'src/ui-components'
import configuration from 'src/../configuration.json'

const BatteryContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

type TeslaTileProps = {
  deviceId: string
  areaId: string
}

const getConfig = (deviceId: string, areaId: string) => {
  // @ts-ignore
  const configArea = configuration?.areas[areaId]
  const devices = configArea?.extraDevices
  const deviceConfig = devices.filter(
    (device: any) => device.device_id === deviceId
  )[0]
  return deviceConfig
}

export const TeslaTile = ({ deviceId, areaId }: TeslaTileProps) => {
  const { states } = useStore((state: any) => ({ states: state.states }))
  const config = getConfig(deviceId, areaId)
  const entities = config.entities

  const batteryPercentage = Number(states[entities.battery_sensor].state)
  const isCharging = states[entities.charger_sensor].state === 'on'

  return (
    <AccessoryCard
      isActive={isCharging}
      name="model Y"
      state={`${isCharging ? 'charging: ' : ''}${batteryPercentage}%`}
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
