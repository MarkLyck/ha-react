import { FC } from 'react'
import { Modal, Button } from 'antd'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalHeader } from '../../common/modals'
import { TemperatureIcon } from './TemperatureIcon'

const StyledModal = styled(Modal)`
  .ant-modal-content {
    width: 300px;
    border-radius: 12px;
  }
`

const LabelTemperature = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-right: 16px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TemperatureChangeButton = styled(Button)``

interface ThermostatCardModalProps {
  /** Method to close the modal */
  readonly close: () => void
  /** Current mode */
  readonly currentMode?: string
  /** Current temperature */
  readonly currentTemperature: number
  /** List of modes available */
  readonly modes?: string[]
  /** Name of the thermostat */
  readonly name: string
  /** Target temperature */
  readonly targetTemperature: number
  /** Action triggered on temperature change */
  readonly onTemperatureChange: (value: number) => void
  /** Action triggered on mode change */
  readonly onModeChange?: (value: string) => void
  /** State of the modal */
  readonly show: boolean
  /** State label of the thermostat */
  readonly statusLabel: string
  /** Temperature max */
  readonly tempMax: number
  /** Temperature min */
  readonly tempMin: number
}

export const ThermostatCardModal: FC<ThermostatCardModalProps> = ({
  close,
  currentMode,
  currentTemperature,
  modes,
  name,
  targetTemperature,
  onTemperatureChange,
  onModeChange,
  show,
  statusLabel,
  tempMax,
  tempMin,
}) => {
  const on = currentMode !== 'off'

  function handleModeChange(key: string, value: string) {
    if (onModeChange) {
      onModeChange(value)
    }
  }

  const handleIncreaseTemperature = () => {
    const newTemp = targetTemperature + 1
    if (newTemp <= tempMax) {
      onTemperatureChange(newTemp)
    }
  }
  const handleDecreaseTemperature = () => {
    const newTemp = targetTemperature - 1
    if (newTemp >= tempMin) {
      onTemperatureChange(newTemp)
    }
  }

  return (
    <StyledModal visible={show} onCancel={close} footer={null}>
      <ModalHeader
        title={name}
        subtitle={statusLabel}
        close={close}
        icon={<TemperatureIcon temperature={currentTemperature} />}
      />
      <Container>
        <LabelTemperature>
          {on ? targetTemperature?.toFixed(1) : currentTemperature?.toFixed(1)}°
        </LabelTemperature>
        <ButtonContainer>
          <TemperatureChangeButton
            onClick={handleIncreaseTemperature}
            disabled={targetTemperature >= tempMax}
          >
            <FontAwesomeIcon icon={['fal', 'angle-up']} />
          </TemperatureChangeButton>
          <TemperatureChangeButton
            onClick={handleDecreaseTemperature}
            disabled={targetTemperature <= tempMin}
          >
            <FontAwesomeIcon icon={['fal', 'angle-down']} />
          </TemperatureChangeButton>
        </ButtonContainer>
      </Container>
    </StyledModal>
  )
}
