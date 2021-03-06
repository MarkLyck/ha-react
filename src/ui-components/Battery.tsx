import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;

  svg {
    color: rgba(0, 0, 0, 0.2);
    font-size: 18px;
    margin-right: 8px;
  }
`

type BatteryProps = {
  percentage: number
  isCharging?: boolean
  showNumber?: boolean
}

export const Battery = ({
  percentage,
  isCharging,
  showNumber,
}: BatteryProps) => {
  if (percentage === null || isNaN(percentage)) return null

  let icon = 'battery-full'
  let color = undefined

  if (percentage < 75) {
    icon = 'battery-three-quarters'
    // color = 'success'
  }
  if (percentage < 50) {
    icon = 'battery-half'
    // color = 'warning'
  }
  if (percentage < 25) {
    icon = 'battery-quarter'
    color = 'danger'
  }
  if (percentage < 10) {
    icon = 'battery-exclamation'
    color = 'danger'
  }
  if (isCharging) {
    icon = 'battery-bolt'
    color = 'success'
  }

  return (
    // @ts-ignore
    <Container color={color}>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={['far', icon]} />
      {showNumber && `${percentage.toFixed(0)}%`}
    </Container>
  )
}
