import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  alignt-items: center;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  position: relative;
  margin-right: 12px;
`

const Container = styled.div`
  margin-bottom: 40px;
`

type ControlsSectionProps = {
  title: string
  children: any
  extra?: any
}

const ControlsSection = ({ title, extra, children }: ControlsSectionProps) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      {extra}
    </Header>
    {children}
  </Container>
)

export default ControlsSection
