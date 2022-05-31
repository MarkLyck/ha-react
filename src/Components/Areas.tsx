import styled from '@emotion/styled'
import { Spin } from 'antd'
import useStore from 'src/lib/useStore'
import ControlsSection from './Controls/ControlsSection'
import Sensor from './Sensors/Sensor'
import Device from './Devices/Device'

const ControlsContainer = styled.div`
  height: 100%;
  width: 1300px;
  padding: 30px;
  box-sizing: border-box;
`

const Sensors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`

const Devices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const SENSOR_TYPES = ['binary_sensor', 'sensor']
const DEVICE_TYPES = ['light', 'climate', 'vacuum', 'button', 'media_player']

const Areas = () => {
  const state = useStore()
  console.log('🔈 ~ state', state)
  const { areas } = useStore((state: any) => ({
    areas: state.areas,
  }))

  if (Object.keys(areas).length === 0) {
    return (
      <Loading>
        <Spin size="large" />
      </Loading>
    )
  }

  const areasList = Object.keys(areas).map((key: string) => areas[key])

  return (
    <ControlsContainer>
      {areasList.map((area: any) => {
        const sensors: string[] =
          area.entities?.filter((entityId: string) =>
            SENSOR_TYPES.includes(entityId.split('.')[0])
          ) || []
        const devices: string[] =
          area.entities?.filter((entityId: string) =>
            DEVICE_TYPES.includes(entityId.split('.')[0])
          ) || []

        return (
          <ControlsSection
            key={area.area_id}
            title={area.name}
            extra={
              <Sensors>
                {sensors.map((entityId) => (
                  <Sensor key={entityId} entityId={entityId} />
                ))}
              </Sensors>
            }
          >
            <Devices>
              {devices.map((entityId) => (
                <Device key={entityId} entityId={entityId} />
              ))}
            </Devices>
          </ControlsSection>
        )
      })}
    </ControlsContainer>
  )
}
export default Areas
