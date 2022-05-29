import { styled } from '@stitches/react'

const Title = styled('div', {
  fontSize: 20,
  fontWeight: 'bold',
  color: '$neutral100',
  marginBottom: 10,
  position: 'relative',
})

const Container = styled('div', {
  marginBottom: 20,
})

type ControlsSectionProps = {
  title: string
  children: any
}

const ControlsSection = ({ title, children }: ControlsSectionProps) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)

export default ControlsSection
