import styled from '@emotion/styled'
import { WithActiveProps } from './types'

export const TileContainer = styled.div`
  width: 100px;
  border-radius: ${(p) => p.theme.card.borderRadius};
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;
`

export const ActionableTileContainer = styled(TileContainer)<WithActiveProps>`
  background-color: ${(p) =>
    p.isActive
      ? p.theme.card.background.colorActive
      : p.theme.card.background.colorInactive};
  opacity: ${(p) =>
    p.isActive ? '100%' : p.isActive === false ? '80%' : '100%'};
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`

export const TileName = styled.div<WithActiveProps>`
  font-size: ${(p) => p.theme.card.name.size};
  font-weight: ${(p) => p.theme.card.name.weight};
  color: ${(p) =>
    p.isActive
      ? p.theme.card.name.colorActive
      : p.theme.card.name.colorInactive};
`

export const TileState = styled.div<WithActiveProps>`
  font-size: ${(p) => p.theme.card.state.size};
  font-weight: ${(p) => p.theme.card.state.weight};
  color: ${(p) =>
    p.isActive
      ? p.theme.card.state.colorActive
      : p.theme.card.state.colorInactive};
`

export const TileIcon = styled.div<WithActiveProps>`
  filter: ${(p) => (p.isActive ? 'grayscale(0%)' : 'grayscale(100%)')};
  opacity: ${(p) => (p.isActive ? '100%' : '25%')};
`

export const TileTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: ${(p) => p.theme.card.background.colorActive};
  color: ${(p) => p.theme.colors.textDark};
  padding-left: 10px;
  box-sizing: border-box;
  font-size: ${(p) => p.theme.card.name.size};
  font-weight: ${(p) => p.theme.card.name.weight};
`
