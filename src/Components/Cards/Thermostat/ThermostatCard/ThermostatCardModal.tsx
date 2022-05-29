import { FC } from 'react'
import { Modal, Button, Segmented } from 'antd'
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
  font-size: 42px;
  font-weight: bold;
  background: #eee;
  border-radius: 12px;
  width: 202px;
`

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 202px;
  margin-top: 8px;
  margin-bottom: 16px;

  button {
    width: calc(50% - 8px);
    margin: 0 4px;
  }
`
const ModeContainer = styled.div`
  display: flex;
  justify-content: center;
`

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
        icon={
          <TemperatureIcon
            temperature={targetTemperature}
            // @ts-ignore
            state={currentMode}
          />
        }
      />
      <Container>
        <LabelTemperature>
          {on ? targetTemperature?.toFixed(0) : currentTemperature?.toFixed(1)}°
        </LabelTemperature>
        <ButtonContainer>
          <Button
            onClick={handleDecreaseTemperature}
            disabled={targetTemperature <= Number(tempMin)}
          >
            <FontAwesomeIcon icon={['fal', 'angle-down']} />
          </Button>
          <Button
            onClick={handleIncreaseTemperature}
            disabled={targetTemperature >= Number(tempMax)}
          >
            <FontAwesomeIcon icon={['fal', 'angle-up']} />
          </Button>
        </ButtonContainer>
        <ModeContainer>
          <Segmented
            defaultValue={currentMode}
            // @ts-ignore
            onChange={onModeChange}
            options={[
              { label: 'Auto', value: 'heat_cool' },
              { label: 'Heat', value: 'heat' },
              { label: 'Cool', value: 'cool' },
              { label: 'Off', value: 'off' },
            ]}
          />
        </ModeContainer>
      </Container>
    </StyledModal>
  )
}
