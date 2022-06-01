import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;

  svg {
    color: ${(p: { percentage: number; theme?: any }) => {
      if (p.percentage > 75) {
        return p.theme.colors.success[600]
      }
      return 'black'
    }};
    font-size: 18px;
    margin-right: 8px;
  }
`

type BatteryProps = {
  percentage: number
  isCharging?: boolean
}

export const Battery = ({ percentage }: BatteryProps) => {
  if (percentage === null || isNaN(percentage)) return null

  return (
    <Container percentage={percentage}>
      <FontAwesomeIcon icon={['far', 'battery-full']} />
      {percentage.toFixed(0)}%
    </Container>
  )
}
