import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import OverviewCard from './OverviewCard'
import useStore from 'src/lib/useStore'
import configuration from 'src/../configuration.json'

const Plants = () => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  let plantsThatNeedWater = 0
  let plantsThatNeedsFertilizing = 0
  let plantsThatNeedsBatteryReplacement = 0

  Object.values(configuration.customSensors)
    .filter((sensor) => sensor.type === 'plant')
    .forEach((plant) => {
      const moisture = Number(states[plant.entities.moisture_sensor].state)

      const conductivity = Number(
        states[plant.entities.conductivity_sensor].state
      )

      const batteryPercentage = Number(
        states[plant.entities.battery_sensor].state
      )

      const needsWater = moisture < plant.target.min_moisture
      const needsFertilizer = conductivity < plant.target.min_conductivity
      const needsBattery = batteryPercentage < 10

      if (needsWater) plantsThatNeedWater++
      if (needsFertilizer) plantsThatNeedsFertilizing++
      if (needsBattery) plantsThatNeedsBatteryReplacement++
    })

  let state = 'all good'
  if (plantsThatNeedsBatteryReplacement > 0) {
    state = `replace ${plantsThatNeedsBatteryReplacement} battery`
  }
  if (plantsThatNeedsFertilizing > 0) {
    state = `${plantsThatNeedsFertilizing} needs fertilizing`
  }
  if (plantsThatNeedWater > 0) {
    state = `${plantsThatNeedWater} needs water`
  }

  return (
    <OverviewCard
      icon={<FontAwesomeIcon icon={['fas', 'seedling']} />}
      name="plants"
      state={state}
      color={theme.colors.success[700]}
    />
  )
}

export default Plants
