import { FC, ReactNode, useState } from 'react'
import { Spin } from 'antd'
import styled from '@emotion/styled'

import { ActionableTileContainer, TileIcon, TileName, TileState } from './Tile'

export const AccessoryCardContainer = styled(ActionableTileContainer)`
  width: 180px;
  position: relative;
  display: flex;
  flex-direction: column;

  overflow: auto;
  overflow: hidden;

  @media (max-width: 640px) {
    width: auto;
  }
`

export const AccessoryCardName = styled(TileName)`
  width: 100%;
  line-height: 16px;
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

  ${(p) => {
    const status = String(p.children).toLowerCase()
    if (status === 'unavailable' || status === 'unknown') {
      return `color: ${p.theme.colors.danger[600]}; `
    }
  }}
`

export const AccessoryCardIcon = styled(TileIcon)`
  margin-right: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  padding: 12px 14px;
  cursor: pointer;
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
  const [isPressing, setIsPressing] = useState(false)

  const onPress = (e: any) => {
    if (props.onPress) {
      props.onPress()
    }
  }

  const handleButtonPress = () => {
    setIsPressing(true)
    if (props.onLongPress) {
      buttonPressTimer = setTimeout(
        () => props.onLongPress && props.onLongPress(),
        200
      )
    }
  }

  const handleButtonRelease = () => {
    setIsPressing(false)
    clearTimeout(buttonPressTimer)
  }

  const icon = props.isActive ? props.iconActive : props.iconInactive

  return (
    <div>
      <AccessoryCardContainer
        className={props.className}
        isActive={props.isActive}
        backgroundImage={props.backgroundImage}
        isPressing={isPressing}
      >
        <AccessoryCardHeader
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
