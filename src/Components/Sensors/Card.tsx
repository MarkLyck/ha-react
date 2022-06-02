import styled from '@emotion/styled'
import {
  AccessoryCardContainer,
  AccessoryCardHeader,
  AccessoryCardName,
  AccessoryCardStatus,
} from 'src/Components/Devices/Tiles/common/AccessoryCard'

const ContainerMini = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  color: white;
  border-radius: 8px;
  font-size: 12px;
`

const SensorCardContainer = styled(AccessoryCardContainer)`
  cursor: default;
  &:active {
    transform: scale(1);
  }
`

const IconContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: white;
`

export const SensorCardMini = ({ children }: any) => (
  <ContainerMini>{children}</ContainerMini>
)

type SensorCardProps = {
  name: string
  icon: any
  children?: any
  state: any
}
export const SensorCard = ({
  name,
  icon,
  children,
  state,
}: SensorCardProps) => {
  return (
    <SensorCardContainer>
      <AccessoryCardHeader>
        <IconContainer>{icon}</IconContainer>
        <div>
          <AccessoryCardName isActive={false}>{name}</AccessoryCardName>
          <AccessoryCardStatus isActive={false}>{state}</AccessoryCardStatus>
        </div>
      </AccessoryCardHeader>
      {children}
    </SensorCardContainer>
  )
}
