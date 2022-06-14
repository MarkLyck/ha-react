import styled from '@emotion/styled'
import {
  AccessoryCardContainer,
  AccessoryCardHeader,
} from 'src/Components/Devices/Tiles/common/AccessoryCard'

const SensorCardContainer = styled(AccessoryCardContainer)`
  background: none;
  cursor: default;
  width: auto;
  border-radius: 6px;
  padding: 8px;
  &:active {
    transform: scale(1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const IconContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: white;

  svg {
    font-size: 12px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SensorName = styled.h5`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 12px;
  margin-bottom: 4px;
`
const SensorStatus = styled.h5`
font-weight: 400;
font-size: 0.8rem;
line-height: 12px;
margin-bottom: 0;
color: ${(p) => {
  if (p.color) return p.color
  return 'rgba(255, 255, 255, 0.5)'
}}};
`

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  color: white;
  border-radius: 8px;
  font-size: 12px;
`

const MiniIconContainer = styled.div`
  margin-right: 8px;
`
const MiniState = styled.span`
  font-weight: bold;
`

export const SensorCardMini = ({ icon, state }: any) => (
  <MiniContainer>
    <MiniIconContainer>{icon}</MiniIconContainer>
    <MiniState>{state}</MiniState>
  </MiniContainer>
)

type SensorCardProps = {
  name: string
  icon: any
  children?: any
  state: any
  stateColor?: string
}
export const SensorCard = ({
  name,
  icon,
  children,
  state,
  stateColor,
}: SensorCardProps) => {
  return (
    <SensorCardContainer>
      <AccessoryCardHeader style={{ padding: 0 }}>
        <IconContainer>{icon}</IconContainer>
        <TextContainer>
          <SensorName>{name}</SensorName>
          <SensorStatus color={stateColor}>{state}</SensorStatus>
        </TextContainer>
      </AccessoryCardHeader>
      {children}
    </SensorCardContainer>
  )
}
