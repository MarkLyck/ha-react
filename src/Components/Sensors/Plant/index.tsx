import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import { SensorCard } from '../Card'
import useStore from 'src/lib/useStore'
import configuration from 'src/../configuration.json'

type PlantSensorProps = {
  entityId: any
  id: string
}

export const PlantSensor = ({ id }: PlantSensorProps) => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  // @ts-ignore
  const plant = configuration.customSensors[id]

  const entities = plant.entities

  const moisture = Number(states[entities.moisture_sensor].state)
  const conductivity = Number(states[entities.conductivity_sensor].state)
  const batteryPercentage = Number(states[entities.battery_sensor].state)

  let isActive = false
  let state = 'moisture: ' + moisture + '%'
  let stateColor

  if (states[entities.moisture_sensor].state === 'unavailable') {
    state = 'unavailable'
    isActive = true
    stateColor = theme.colors.danger[600]
  } else if (moisture < plant.target.min_moisture) {
    state = 'needs water: ' + moisture + '%'
    isActive = true
    // stateColor = theme.colors.primary[600]
  } else if (conductivity < plant.target.min_conductivity) {
    state = `needs fertilizing`
    isActive = true
    // stateColor = theme.colors.warning[700]
  } else if (batteryPercentage < 10) {
    state = 'replace battery'
    isActive = true
    stateColor = theme.colors.danger[600]
  }

  return (
    <SensorCard
      name={plant.name}
      icon={<FontAwesomeIcon icon={['fas', 'seedling']} />}
      state={state}
      stateColor={stateColor}
    />
  )
}
