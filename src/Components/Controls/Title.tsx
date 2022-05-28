import { styled } from '@stitches/react'

const TitleContainer = styled('div', {
  fontSize: 20,
  fontWeight: 'bold',
  color: '$neutral100',
  marginBottom: 10,
  position: 'relative',
})

export const Title = (props: any) => (
  <TitleContainer>{props.children}</TitleContainer>
)
