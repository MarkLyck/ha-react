import styled from '@emotion/styled'
import useStore from 'src/lib/useStore'
import { AccessoryCard } from '../common/AccessoryCard'
import TeslaLogo from 'src/assets/icons/devices/tesla.svg'
import configuration from 'src/../configuration.json'

const ChargingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px 16px;
`

const ProgressBarContainer = styled.div`
  height: 8px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 4px;
`

const ProgressBar = styled.div`
  height: 8px;
  width: ${(p: { percent: number }) => p.percent}%;
  background: ${(p) => {
    if (p.percent < 15) return p.theme.colors.danger[600]
    if (p.percent < 30) return p.theme.colors.warning[600]
    return p.theme.colors.success[600]
  }};
  border-radius: 4px;
  transition: 0.2s width ease-in-out;
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ChargingStatus = styled.span`
  font-size: 11px;
  color: ${(p) => p.theme.colors.neutral[1000]};
  font-weight: bold;
  margin-bottom: 6px;
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
  const chargingRate = states[entities.charging_rate_sensor].state
  const isParked = states[entities.parking_brake_sensor].state === 'on'

  let state = isParked ? 'parked' : 'driving'
  if (batteryPercentage) {
    state += ` - ${batteryPercentage}%`
  }

  return (
    <AccessoryCard
      isActive={isCharging || !isParked}
      name="model Y"
      state={state}
      // @ts-ignore
      iconActive={<TeslaLogo style={{ height: '24px' }} />}
      // @ts-ignore
      iconInactive={<TeslaLogo style={{ height: '24px' }} />}
    >
      {isCharging && (
        <ChargingContainer>
          <Flex>
            <ChargingStatus>Charging</ChargingStatus>
            <ChargingStatus>{chargingRate} mi/hr</ChargingStatus>
          </Flex>
          <ProgressBarContainer>
            <ProgressBar percent={batteryPercentage} />
          </ProgressBarContainer>
        </ChargingContainer>
      )}
    </AccessoryCard>
  )
}
