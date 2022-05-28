import { styled } from '@stitches/react'

const TimeContainer = styled('div', {
  color: '$neutral200',
  fontSize: 70,
})

export const TimeView = () => {
  const format2Digits = (number: number) => ('0' + number).slice(-2)

  return (
    <TimeContainer>
      {format2Digits(new Date().getHours())}:
      {format2Digits(new Date().getMinutes())}
    </TimeContainer>
  )
}
