import styled from '@emotion/styled'

const Container = styled.div`
  padding: 8px 20px 8px 12px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 42px;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
    background: rgba(0, 0, 0, 0.6);
  }

  svg {
    color: white;
    margin-right: 8px;
    width: 24px;
    font-size: 16px;
    color: ${(p) => p.color};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.p`
  margin-bottom: 4px;
  font-weight: 400;
  color: white;
  font-size: 13px;
  line-height: 12px;

  &:first-letter {
    text-transform: capitalize;
  }
`

const State = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 12px;
  &:first-letter {
    text-transform: capitalize;
  }
`

type OverviewCardProps = {
  name: string
  state: string
  color: string
  icon: React.ReactNode
}

const OverviewCard = ({ icon, name, state, color }: OverviewCardProps) => {
  return (
    <Container color={color}>
      {icon}
      <Content>
        <Name>{name}</Name>
        <State>{state}</State>
      </Content>
    </Container>
  )
}
export default OverviewCard
