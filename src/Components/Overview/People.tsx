import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@emotion/react'
import OverviewCard from './OverviewCard'
import useStore from 'src/lib/useStore'

const People = () => {
  const theme = useTheme()
  const states = useStore((state: any) => state.states)

  let peopleHome = 0
  let totalPeople = 0
  const peopleAtHome: string[] = []
  Object.keys(states)
    .filter((key) => key.includes('person'))
    .forEach((personState) => {
      const person = states[personState]
      totalPeople++
      if (person.state === 'home') {
        peopleHome++
        peopleAtHome.push(person.attributes.friendly_name)
      }
      return person
    })

  let state = 'All away'
  if (peopleHome === totalPeople) {
    state = 'All home'
  } else if (peopleHome === 1) {
    state = `${peopleAtHome[0]} is home`
  } else if (peopleHome > 1) {
    state = `${peopleHome} home`
  }

  const faIcon = peopleHome > 0 ? 'house-user' : 'house-blank'

  return (
    <OverviewCard
      icon={<FontAwesomeIcon icon={['fas', faIcon]} />}
      name="people"
      state={state}
      color={theme.colors.warning[600]}
    />
  )
}

export default People
