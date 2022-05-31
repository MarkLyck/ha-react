import { Modal } from 'antd'
import styled from '@emotion/styled'
import { ModalHeader } from '../common/modals'
// @ts-ignore
import VacuumIcon from './vacuum.svg?component'

import { useHistory } from 'src/queries/history'

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

type VacuumModalProps = {
  visible: boolean
  close: () => void
  entity: any
}

const VacuumModal = ({ visible, close, entity }: VacuumModalProps) => {
  const { friendly_name, battery_level, fan_speed } = entity.attributes
  const { data } = useHistory()
  console.log('🔈 ~ data', data)

  return (
    <StyledModal visible={visible} onCancel={close} footer={null}>
      <ModalHeader
        title={friendly_name}
        subtitle={entity.state}
        close={close}
        icon={<VacuumIcon style={{ width: 'auto' }} />}
      />
      <Container>
        {battery_level && <div>Battery: {battery_level}%</div>}
        {fan_speed && <div>Fan Speed: {fan_speed}</div>}
      </Container>
    </StyledModal>
  )
}
export default VacuumModal
