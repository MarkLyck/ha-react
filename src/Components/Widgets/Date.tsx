import { styled } from '@stitches/react'

const DateContainer = styled('div', {
  color: '$neutral500',
  fontSize: '20px',
  textTransform: 'capitalize',
})

export const DateView = () => {
  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date().toLocaleDateString('en-US', options)

  return <DateContainer>{date}</DateContainer>
}
