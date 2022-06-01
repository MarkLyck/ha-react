import styled from '@emotion/styled'
import useStore from 'src/lib/useStore'
import { AccessoryCard } from 'src/Components/Devices/Tiles/common/AccessoryCard'

type FallbackTileProps = {
  entityId: string
}

const INACTIVE_STATES = ['unknown', 'off', 'idle']

const FallbackTile = ({ entityId }: FallbackTileProps) => {
  const states = useStore((state: any) => state?.states)
  const entity = states[entityId]
  const isActive = !INACTIVE_STATES.includes(entity.state)

  // @ts-ignore
  return (
    <AccessoryCard
      isActive={isActive}
      name={entity.attributes.friendly_name}
      state={entity.state}
    />
  )
}
export default FallbackTile
