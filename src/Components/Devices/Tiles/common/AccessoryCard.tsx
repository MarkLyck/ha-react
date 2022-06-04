import { FC, ReactNode } from 'react'
import { Spin } from 'antd'
import styled from '@emotion/styled'

import { ActionableTileContainer, TileIcon, TileName, TileState } from './Tile'

export const AccessoryCardContainer = styled(ActionableTileContainer)`
  width: 160px;
  position: relative;
  display: flex;
  flex-direction: column;

  overflow: auto;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 600px) {
    width: auto;
  }
`

export const AccessoryCardName = styled(TileName)`
  width: 100%;
  line-height: 13px;
  overflow: hidden;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const AccessoryCardStatus = styled(TileState)`
  justify-self: start;
  align-self: center;
  grid-area: status;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const AccessoryCardIcon = styled(TileIcon)`
  margin-right: 8px;
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

export const AccessoryCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
`

export const AccessoryTextContainer = styled.div`
  width: calc(100% - 42px);
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
  /** Background */
  readonly backgroundImage?: string
}

export const AccessoryCard: FC<AccessoryCardProps> = (props) => {
  const onPress = (e: any) => {
    console.log('🔈 ~ e', e)
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
        onTouchStart={handleButtonPress}
        onTouchEnd={handleButtonRelease}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        backgroundImage={props.backgroundImage}
      >
        <AccessoryCardHeader onClick={onPress}>
          {props.loading && (
            <AccessoryLoading>
              <Spin />
            </AccessoryLoading>
          )}
          <AccessoryCardIcon isActive={props.isActive}>
            {icon}
          </AccessoryCardIcon>
          <AccessoryTextContainer>
            <AccessoryCardName isActive={props.isActive}>
              {props.name}
            </AccessoryCardName>
            <AccessoryCardStatus isActive={props.isActive}>
              {props.state}
            </AccessoryCardStatus>
          </AccessoryTextContainer>
        </AccessoryCardHeader>
        {props.children}
      </AccessoryCardContainer>
    </div>
  )
}
