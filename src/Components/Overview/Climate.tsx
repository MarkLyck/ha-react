import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import OverviewCard from './OverviewCard'
import useStore from 'src/lib/useStore'
import configuration from 'src/../configuration.json'

const Climate = () => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  const climateState = states[configuration.climate]
  console.log('🔈 ~ climateState', climateState)
  const temperatures = configuration.temperature_sensors.map(
    (entityId: string) => {
      return Math.floor(Number(states[entityId]?.state))
    }
  )

  const maxTemp = Math.max(...temperatures)
  const minTemp = Math.min(...temperatures)

  return (
    <OverviewCard
      icon={
        <FontAwesomeIcon
          icon={['fas', 'fan']}
          className={
            climateState.attributes.fan === 'off' ? undefined : 'fa-spin'
          }
        />
      }
      name="climate"
      color={theme.colors.primary[400]}
      state={`${minTemp}-${maxTemp}°`}
    />
  )
}

export default Climate
