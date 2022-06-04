import styled from '@emotion/styled'
import { Spin } from 'antd'
import useStore from 'src/lib/useStore'
import ControlsSection from './Controls/ControlsSection'
import Sensor from './Sensors/Sensor'
import Device from './Devices/Device'
import configuration from 'src/../configuration.json'

const ControlsContainer = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 16px;
  }
`

const MiniSensors = styled.div`
  display: flex;
  gap: 8px;
`

const Sensors = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    padding-right: 16px;
    grid-template-columns: 50% 50%;
  }
`

const Devices = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    padding-right: 16px;
    grid-template-columns: 50% 50%;
  }
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const CategoryTitle = styled.h3`
  color: rgba(255, 255, 255, 0.24);
  font-weight: 600;
  margin-bottom: 8px;
`

const SENSOR_DOMAINS = ['binary_sensor', 'sensor', 'device_tracker']
const MINI_SENSOR_TYPES = ['temp', 'humidity', 'occupancy', 'motion']
const DEVICE_TYPES = [
  'light',
  'climate',
  'vacuum',
  'button',
  'media_player',
  'switch',
  'lock',
  'select',
]

const getEntitiesInArea = (area: any) => {
  return area.entities
}

const getDevices = (entities: string[]) => {
  return (
    entities?.filter((entityId: string) => {
      const domain = entityId.split('.')[0]
      return DEVICE_TYPES.includes(domain)
    }) || []
  )
}
const getSensors = (entities: string[], miniSensors: string[]) => {
  return (
    entities?.filter((entityId: string) => {
      if (miniSensors.includes(entityId)) return false
      const domain = entityId.split('.')[0]
      return SENSOR_DOMAINS.includes(domain)
    }) || []
  )
}

const getMiniSensors = (entities: string[]) => {
  const sensors =
    entities?.filter((entityId: string) => {
      return SENSOR_DOMAINS.includes(entityId.split('.')[0])
    }) || []

  return sensors?.filter((entityId: string) => {
    let found = false
    MINI_SENSOR_TYPES.forEach((type) => {
      if (entityId.includes(type)) {
        found = true
      }
    })
    return found
  })
}

const Areas = () => {
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
        const entities = getEntitiesInArea(area)
        let devices: string[] = getDevices(entities)
        const customDevices: any[] = []
        let miniSensors: string[] = getMiniSensors(entities)
        let sensors: string[] = getSensors(entities, miniSensors)

        // @ts-ignore
        const areaConfig: any = configuration?.areas[area.area_id]
        const extraDevices = areaConfig?.extraDevices
        if (extraDevices?.length > 0) {
          extraDevices.forEach((device: any) => {
            customDevices.push(device)
          })
        }

        return (
          <ControlsSection
            key={area.area_id}
            title={area.name}
            extra={
              <MiniSensors>
                {miniSensors.map((entityId) => (
                  <Sensor key={entityId} entityId={entityId} />
                ))}
              </MiniSensors>
            }
          >
            <CategoryTitle>Devices</CategoryTitle>
            <Devices>
              {devices.map((entityId) => (
                <Device key={entityId} entityId={entityId} />
              ))}
              {customDevices.map((device) => (
                <Device
                  key={device.device_id}
                  entityId={null}
                  type={device.type}
                  deviceId={device.device_id}
                  areaId={area.area_id}
                />
              ))}
            </Devices>
            {sensors.length > 0 && (
              <>
                <CategoryTitle>Sensors</CategoryTitle>
                <Sensors>
                  {sensors.map((entityId) => (
                    <Sensor key={entityId} entityId={entityId} />
                  ))}
                </Sensors>
              </>
            )}
          </ControlsSection>
        )
      })}
    </ControlsContainer>
  )
}
export default Areas
