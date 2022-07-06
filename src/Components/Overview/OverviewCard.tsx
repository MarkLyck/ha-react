import styled from '@emotion/styled'

const Container = styled.div`
  padding: 8px 20px 8px 8px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 42px;

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
  text-transform: capitalize;
  font-size: 13px;
  line-height: 12px;
`

const State = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
  font-size: 12px;
  line-height: 12px;
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
