import styled from '@emotion/styled'

import TemperatureCard from './TemperatureCard'

const Container = styled.div`
  margin-bottom: 32px;
`

const Title = styled.h1`
  color: white;
  font-weight: bold;
`

const Overview = () => {
  return (
    <Container>
      <Title>Home</Title>
      <TemperatureCard />
    </Container>
  )
}
export default Overview
