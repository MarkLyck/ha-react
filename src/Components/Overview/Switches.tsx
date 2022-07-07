import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import OverviewCard from './OverviewCard'
import useStore from 'src/lib/useStore'

const Switches = () => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  let totalSwitches = 0
  let switchesOn = 0
  Object.keys(states)
    .filter((key) => key.includes('switch.') && !key.includes('tesla'))
    .forEach((switchKey) => {
      const switchState = states[switchKey]
      totalSwitches++
      if (switchState.state !== 'off') {
        switchesOn++
      }
    })

  let state = 'all off'
  if (switchesOn > 0) {
    state = `${switchesOn} on`
  }
  if (switchesOn === totalSwitches) {
    state = 'all switches on'
  }

  const faIcon = switchesOn > 0 ? 'light-switch-on' : 'light-switch-off'

  return (
    <OverviewCard
      icon={<FontAwesomeIcon icon={['fas', faIcon]} />}
      name="switches"
      state={state}
      color={theme.colors.neutral[switchesOn > 0 ? 100 : 500]}
    />
  )
}

export default Switches
