import { FC, ReactNode } from 'react'
import { Spin } from 'antd'
import styled from '@emotion/styled'

import { ActionableTileContainer, TileIcon, TileName, TileState } from './Tile'

export const AccessoryCardContainer = styled(ActionableTileContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  overflow: hidden;
  width: 160px;
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
  margin-right: 12px;
  height: 32px;
  width: 32px;

  svg {
    height: 32px;
    width: 32px;
  }
`

const AccessoryLoading = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
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
  const onPress = () => {
    if (props.onPress) {
      props.onPress()
    }
  }

  const handleButtonPress = () => {
    if (props.onLongPress) {
      buttonPressTimer = setTimeout(
        () => props.onLongPress && props.onLongPress(),
        200
      )
    }
  }

  const handleButtonRelease = () => {
    clearTimeout(buttonPressTimer)
  }

  const icon = props.isActive ? props.iconActive : props.iconInactive

  return (
    <div>
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
        <Header>
          <AccessoryCardIcon isActive={props.isActive}>
            {icon}
          </AccessoryCardIcon>
          <div>
            <AccessoryCardName isActive={props.isActive}>
              {props.name}
            </AccessoryCardName>
            <AccessoryCardStatus isActive={props.isActive}>
              {props.state}
            </AccessoryCardStatus>
          </div>
        </Header>
        {props.children}
      </AccessoryCardContainer>
    </div>
  )
}
