import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  color: white;
  border-radius: 8px;
  font-size: 12px;
`

const SensorCard = ({ children }: any) => <Container>{children}</Container>

export default SensorCard
