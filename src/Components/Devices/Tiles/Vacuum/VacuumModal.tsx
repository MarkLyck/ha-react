import { Modal, Button, Space, Segmented } from 'antd'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useStore from 'src/lib/useStore'
import { ModalHeader } from '../common/modals'
// @ts-ignore
import VacuumIcon from 'src/assets/icons/devices/vacuum.svg'
import { Battery } from 'src/ui-components'

const StyledModal = styled(Modal)`
  .ant-modal-content {
    width: 300px;
    border-radius: 12px;
  }
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

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  && {
    border-radius: 8px;
  }
`

type VacuumModalProps = {
  visible: boolean
  close: () => void
  entity: any
}

const VacuumModal = ({ visible, close, entity = {} }: VacuumModalProps) => {
  const { entity_id } = entity
  const { friendly_name, battery_level, fan_speed } = entity.attributes
  const sendSocket = useStore((state: any) => state.sendSocket)

  return (
    <StyledModal visible={visible} onCancel={close} footer={null}>
      <ModalHeader
        title={friendly_name}
        subtitle={entity.state}
        close={close}
        // @ts-ignore
        icon={<VacuumIcon style={{ width: 'auto' }} />}
      />
      <Container>
        <Battery percentage={battery_level} />

        <Space style={{ margin: '16px 0' }}>
          <IconButton
            icon={<FontAwesomeIcon icon={['far', 'play']} />}
            size="large"
            type="primary"
            onClick={() =>
              sendSocket({
                domain: 'vacuum',
                service: 'start',
                service_data: { entity_id },
                type: 'call_service',
              })
            }
          />
          <IconButton
            icon={<FontAwesomeIcon icon={['far', 'pause']} />}
            size="large"
            onClick={() =>
              sendSocket({
                domain: 'vacuum',
                service: 'pause',
                service_data: { entity_id },
                type: 'call_service',
              })
            }
          />
          <IconButton
            icon={<FontAwesomeIcon icon={['far', 'stop']} />}
            size="large"
            onClick={() =>
              sendSocket({
                domain: 'vacuum',
                service: 'stop',
                service_data: { entity_id },
                type: 'call_service',
              })
            }
          />
          <IconButton
            icon={<FontAwesomeIcon icon={['far', 'location-crosshairs']} />}
            size="large"
            onClick={() =>
              sendSocket({
                domain: 'vacuum',
                service: 'locate',
                service_data: { entity_id },
                type: 'call_service',
              })
            }
          />
          <IconButton
            icon={<FontAwesomeIcon icon={['far', 'house-chimney']} />}
            size="large"
            onClick={() =>
              sendSocket({
                domain: 'vacuum',
                service: 'return_to_base',
                service_data: { entity_id },
                type: 'call_service',
              })
            }
          />
        </Space>
        <Segmented
          onChange={(fan_speed) =>
            sendSocket({
              domain: 'vacuum',
              service: 'set_fan_speed',
              service_data: { entity_id, fan_speed },
              type: 'call_service',
            })
          }
          defaultValue={fan_speed}
          options={['quiet', 'normal', 'max', 'max+']}
        />
      </Container>
    </StyledModal>
  )
}

export default VacuumModal
