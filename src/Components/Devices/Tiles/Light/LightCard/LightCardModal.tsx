import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Modal } from 'antd'
// @ts-ignore
import LightIconSvg from './light-bulb.svg'
import { ModalContent, ModalHeader } from '../../common/modals'
import { Slider, Switch } from '../../common'
import { Capabilities } from '../../common/types'

interface LightCardModalProps {
  /** Brightness value */
  readonly brightness?: number
  /** Capabilities of the light */
  readonly capabilities: Capabilities
  /** Method to close the modal */
  readonly close: () => void
  /** Color of the light */
  readonly color?: string
  /** Name of the light */
  readonly name: string
  /** State of the light */
  readonly on: boolean
  /** Action triggered on toggle switch */
  readonly onToggle?: () => void
  /** Action triggered on brightness change */
  readonly onBrightnessChange?: (value: number) => void
  /** Action triggered on color change */
  readonly onColorChange?: () => void
  /** State of the modal */
  readonly show: boolean
  /** State label of the light */
  readonly state: string
}

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
`

export const LightCardModal: FC<LightCardModalProps> = ({
  name,
  state,
  on,
  show,
  capabilities,
  brightness,
  onBrightnessChange,
  onToggle,
  close,
}: LightCardModalProps) => {
  const [color] = useState('#F8CC46')

  const stateLabel = capabilities.SUPPORT_BRIGHTNESS
    ? brightness && brightness > 0
      ? `${brightness}% Brightness`
      : state
    : state

  function handleSliderChange(value: number) {
    if (onBrightnessChange) {
      onBrightnessChange(value)
    }
  }

  return (
    <StyledModal visible={show} onCancel={close} footer={null} width={300}>
      <ModalHeader
        title={name}
        subtitle={stateLabel}
        close={close}
        icon={<LightIconSvg />}
      />
      <ModalContent>
        {capabilities.SUPPORT_BRIGHTNESS ? (
          <Slider
            value={brightness || 0}
            onChange={handleSliderChange}
            color={color}
          />
        ) : (
          <Switch isActive={on} onToggle={() => onToggle && onToggle()} />
        )}
        {capabilities.SUPPORT_COLOR ? (
          <div>TODO: Implement color picker</div>
        ) : null}
      </ModalContent>
    </StyledModal>
  )
}
