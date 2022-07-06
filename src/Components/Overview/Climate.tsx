import OverviewCard from './OverviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStore from 'src/lib/useStore'
import configuration from 'src/../configuration.json'

const Climate = () => {
  const states = useStore((state: any) => state.states)

  const climateState = states[configuration.climate]
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
          className={climateState.state === 'off' ? undefined : 'fa-spin'}
        />
      }
      name="climate"
      color="#65d1ff"
      state={`${minTemp}-${maxTemp}°`}
    />
  )
}

export default Climate
