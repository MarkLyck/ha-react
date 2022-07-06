import OverviewCard from './OverviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStore from 'src/lib/useStore'

const People = () => {
  const states = useStore((state: any) => state.states)

  let peopleHome = 0
  Object.keys(states)
    .filter((key) => key.includes('person'))
    .map((personState) => {
      const person = states[personState]
      if (person.state === 'home') {
        peopleHome++
      }
      return person
    })

  let state = 'All away'
  if (peopleHome === 2) {
    state = 'All Home'
  } else if (peopleHome > 0) {
    state = `${peopleHome} Home`
  }

  return (
    <OverviewCard
      icon={<FontAwesomeIcon icon={['fas', 'people-roof']} />}
      name="people"
      state={state}
      color="#ffaa00"
    />
  )
}

export default People
