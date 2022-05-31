import { FC, ReactNode } from 'react'
import { Spin } from 'antd'
import styled from '@emotion/styled'

import { ActionableTileContainer, TileIcon, TileName, TileState } from './Tile'

export const AccessoryCardContainer = styled(ActionableTileContainer)`
  position: relative;
  display: grid;
  padding: 10px;
  grid-template-areas:
    'icon info'
    'name name'
    'status status';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  max-height: ${(props) => props.theme.card.size};
  align-items: start;
  overflow: hidden;
  width: ${(props) => props.theme.card.size};
  height: ${(props) => props.theme.card.size};
  cursor: pointer;
`

export const AccessoryCardName = styled(TileName)`
  justify-self: start;
  align-self: flex-end;
  grid-area: name;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 13px;
`

export const AccessoryCardStatus = styled(TileState)`
  justify-self: start;
  align-self: center;
  grid-area: status;
  text-transform: capitalize;
`

export const AccessoryCardIcon = styled(TileIcon)`
  justify-self: start;
  grid-area: icon;
  width: 1.8rem;
  margin-bottom: 0.5rem;

  svg {
    width: auto;
  }
`

const AccessoryLoading = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

let buttonPressTimer: any

export interface AccessoryCardProps {
  /** Children */
  readonly children?: ReactNode
  /** Custom className */
  readonly className?: string
  /** Action triggered on long press */
  readonly onLongPress?: () => void
  /** Action triggered on press */
  readonly onPress?: () => void
  /** Icon for active state */
  readonly iconActive?: ReactNode
  /** Icon for inactive state */
  readonly iconInactive?: ReactNode
  /** State of the card */
  readonly isActive: boolean
  /** Name label of the card */
  readonly name: string
  /** State label of the card */
  readonly state: string
  /** State label of the card */
  readonly loading?: boolean
}

export const AccessoryCard: FC<AccessoryCardProps> = (props) => {
  function onPress() {
    if (props.onPress) {
      props.onPress()
    }
  }

  function handleButtonPress() {
    if (props.onLongPress) {
      buttonPressTimer = setTimeout(
        () => props.onLongPress && props.onLongPress(),
        200
      )
    }
  }

  function handleButtonRelease() {
    clearTimeout(buttonPressTimer)
  }

  const icon = props.isActive ? props.iconActive : props.iconInactive

  return (
    <AccessoryCardContainer
      className={props.className}
      isActive={props.isActive}
      onClick={onPress}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
      onMouseDown={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onMouseLeave={handleButtonRelease}
    >
      {props.loading && (
        <AccessoryLoading>
          <Spin />
        </AccessoryLoading>
      )}
      <AccessoryCardIcon isActive={props.isActive}>{icon}</AccessoryCardIcon>
      <AccessoryCardName isActive={props.isActive}>
        {props.name}
      </AccessoryCardName>
      <AccessoryCardStatus isActive={props.isActive}>
        {props.state}
      </AccessoryCardStatus>
      {props.children}
    </AccessoryCardContainer>
  )
}
