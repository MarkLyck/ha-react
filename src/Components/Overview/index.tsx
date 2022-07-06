import styled from '@emotion/styled'

import Climate from './Climate'
import Lights from './Lights'
import Switches from './Switches'
import Plants from './Plants'
import People from './People'

const Container = styled.div`
  margin-bottom: 32px;
`

const Title = styled.h1`
  color: white;
  font-weight: bold;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
`

const Overview = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Cards>
        <Climate />
        <Lights />
        <Switches />
        <Plants />
        <People />
      </Cards>
    </Container>
  )
}
export default Overview
