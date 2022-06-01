import { FC } from 'react'
import styled from '@emotion/styled'

const ThermostatIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: #444444;
  border-radius: 50%;
  border: 3px solid #8e8d92;

  &::after {
    background: ${(p: any) => p.stateColor};
    content: ${(p: any) => `'${p.temperature}'`};
    text-align: center;
    line-height: 16px;
    color: white;
    font-weight: bold;
    font-size: 0.5rem;
    display: block;
    height: 16px;
    width: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

interface TemperatureIconProps {
  /** Temperature value */
  readonly temperature: number
  /** Current state */
  readonly state: string
}

export const TemperatureIcon: FC<TemperatureIconProps> = ({
  temperature,
  state,
}) => {
  let stateColor = '#1890ff' // blue (cooling)
  if (state === 'heat') stateColor = '#FF0000' // red (heating)
  if (state === 'heat_cool') stateColor = '#52c41a' // orange (heating and cooling)
  if (state === 'off') stateColor = '#444444' // grey (off)

  return (
    <ThermostatIcon
      // @ts-ignore
      temperature={temperature?.toFixed(0) || '?'}
      stateColor={stateColor}
    />
  )
}
