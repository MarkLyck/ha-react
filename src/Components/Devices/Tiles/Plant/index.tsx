import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStore from 'src/lib/useStore'
import { AccessoryCard } from '../common/AccessoryCard'
import configuration from 'src/../configuration.json'
import { Battery } from 'src/ui-components'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  height: 40px;
  width: 40px;

  svg {
    color: ${(p) => p.theme.colors.success[700]};
    height: 24px;
    width: 24px;
  }
`

const BatteryContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
`

type PlantTileProps = {
  deviceId: string
  areaId: string
}

const getConfig = (areaId: string) => {
  // @ts-ignore
  const configArea = configuration?.areas[areaId]
  const deviceConfig = configArea?.extraDevices[0]
  return deviceConfig
}

export const PlantTile = ({ areaId }: PlantTileProps) => {
  const theme = useTheme()
  const { states } = useStore((state: any) => ({ states: state.states }))
  const config = getConfig(areaId)
  const entities = config.entities

  const moisture = Number(states[entities.moisture_sensor].state)
  const conductivity = Number(states[entities.conductivity_sensor].state)
  const batteryPercentage = Number(states[entities.battery_sensor].state)

  let isActive = false
  let state = 'moisture: ' + moisture + '%'
  let stateColor

  if (moisture < config.target.moisture) {
    state = 'needs water!'
    isActive = true
    stateColor = theme.colors.primary[600]
  } else if (conductivity < config.target.conductivity) {
    state = `needs fertilizing`
    isActive = true
    stateColor = theme.colors.warning[700]
  } else if (batteryPercentage < 10) {
    state = 'Replace battery'
    isActive = true
    stateColor = theme.colors.danger[600]
  }

  return (
    <AccessoryCard
      isActive={isActive}
      name={config.name}
      state={state}
      stateColor={stateColor}
      iconActive={
        <IconContainer>
          <FontAwesomeIcon icon={['fas', 'seedling']} />
        </IconContainer>
      }
      iconInactive={
        <IconContainer>
          <FontAwesomeIcon
            icon={['fas', 'seedling']}
            style={{ color: 'black' }}
          />
        </IconContainer>
      }
    >
      <BatteryContainer>
        <Battery percentage={batteryPercentage} />
      </BatteryContainer>
    </AccessoryCard>
  )
}
