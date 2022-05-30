import { useState } from 'react'
import { Button, Modal, Input, Select, Space, Typography } from 'antd'
import styled from '@emotion/styled'

const { Text } = Typography

const StyledButton = styled(Button)`
  border-radius: 8px;
  width: 100px;
  font-weight: bold;
  opacity: 10%;
  font-size: 12px;
`

const Test = ({ hass }: any) => {
  const [visible, setVisible] = useState(false)
  const [domain, setDomain] = useState('homeassistant')
  const [service, setService] = useState('turn_on')
  const [entityId, setEntityId] = useState('vacuum.vacuum')
  console.log('🔈 ~ hass', hass)

  const onSubmit = () => {
    hass.callService(domain, 'turn_on', {
      entity_id: entityId,
    })
  }

  const domainOptions = Object.keys(hass.services).map((key: any) => ({
    value: key,
  }))

  const serviceOptions = Object.keys(hass.services[domain]).map((key: any) => ({
    value: key,
  }))

  const entityOptions = Object.keys(hass.states).map((key: any) => ({
    value: key,
  }))

  return (
    <div>
      <StyledButton onClick={() => setVisible(true)}>Test</StyledButton>
      <Modal
        visible={visible}
        title="Test call"
        okText="Call Service"
        onOk={onSubmit}
        onCancel={() => setVisible(false)}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text>Domain</Text>
          <Select
            showSearch
            style={{ width: '100%' }}
            value={domain}
            options={domainOptions}
            onChange={setDomain}
          />
          <Text>Service</Text>
          <Select
            showSearch
            style={{ width: '100%' }}
            value={service}
            options={serviceOptions}
            onChange={setService}
          />
          <Text>Entity</Text>
          <Select
            showSearch
            style={{ width: '100%' }}
            value={entityId}
            options={entityOptions}
            onChange={setEntityId}
          />
        </Space>
      </Modal>
    </div>
  )
}

export default Test
