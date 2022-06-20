import styled from '@emotion/styled'

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
  gap: 8px;
`

const Overview = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Cards>
        <Climate />
      </Cards>
    </Container>
  )
}
export default Overview
