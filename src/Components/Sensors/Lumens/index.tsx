import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorCardMini } from '../Card'
import useStore from 'src/lib/useStore'

type LumensSensorProps = {
  entityId: string
}

export const LumensSensor = ({ entityId }: LumensSensorProps) => {
  const states = useStore((state: any) => state.states)
  const entity = states[entityId]
  if (!entity) return null

  const state = Math.floor(Number(entity.state))

  return (
    <SensorCardMini
      name={entity.attributes.friendly_name}
      // @ts-ignore
      icon={<FontAwesomeIcon icon={['fas', 'brightness']} />}
      state={state}
    />
  )
}
