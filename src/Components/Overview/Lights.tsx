import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import OverviewCard from './OverviewCard'
import useStore from 'src/lib/useStore'

const Switches = () => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  let totalLights = 0
  let lightsOn = 0
  Object.keys(states)
    .filter((key) => key.includes('light.'))
    .forEach((lightState) => {
      const light = states[lightState]
      totalLights++
      if (light.state !== 'off') {
        lightsOn++
      }
    })

  let state = 'all off'
  if (lightsOn > 0) {
    state = `${lightsOn} on`
  }
  if (lightsOn === totalLights) {
    state = 'all lights on'
  }

  const faIcon = lightsOn > 0 ? 'lightbulb-on' : 'lightbulb'

  return (
    <OverviewCard
      icon={<FontAwesomeIcon icon={['fas', faIcon]} />}
      name="lights"
      state={state}
      color={theme.colors.warning[400]}
    />
  )
}

export default Switches
