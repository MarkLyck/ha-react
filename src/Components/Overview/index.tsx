import styled from '@emotion/styled'

// import TemperatureCard from './TemperatureCard'
import Climate from './Climate'

const Container = styled.div`
  margin-bottom: 32px;
`

const Title = styled.h1`
  color: white;
  font-weight: bold;
`

const Cards = styled.div`
  display: flex;
`

const Overview = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Cards>
        <Climate />
      </Cards>
      {/* <TemperatureCard /> */}
    </Container>
  )
}
export default Overview
