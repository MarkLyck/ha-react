import styled from '@emotion/styled'
import configuration from 'src/../configuration.json'

import ControlsSection from './Controls/ControlsSection'
import Sensor from './Sensors/Sensor'
import Device from './Devices/Device'

const Sensors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  margin-top: 0px;

  @media (max-width: 640px) {
    padding-right: 16px;
    grid-template-columns: 50% 50%;
  }
`

const MiniSensors = styled.div`
  display: flex;
  gap: 8px;
`

const Devices = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 180px);
  margin-bottom: 16px;
  margin-top: 8px;

  @media (max-width: 640px) {
    padding-right: 16px;
    grid-template-columns: 50% 50%;
  }
`

type AreaProps = {
  area: any
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
      if (entityId.includes('battery') || entityId.includes('power')) {
        return false
      }
      if (miniSensors.includes(entityId)) return false
      const domain = entityId.split('.')[0]
      return SENSOR_DOMAINS.includes(domain)
    }) || []
  )
}

const getMiniSensors = (entities: string[]) => {
  const sensors =
    entities?.filter((entityId: string) => {
      if (entityId.includes('battery') || entityId.includes('power')) {
        return false
      }
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

const SENSOR_DOMAINS = ['binary_sensor', 'sensor', 'device_tracker']
const MINI_SENSOR_TYPES = [
  'temp',
  'humidity',
  'occupancy',
  'motion',
  'pressure',
]
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

const Area = ({ area }: AreaProps) => {
  const entities = area.entities
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
      {sensors.length > 0 && (
        <>
          <Sensors>
            {sensors.map((entityId) => (
              <Sensor key={entityId} entityId={entityId} />
            ))}
          </Sensors>
        </>
      )}
      <Devices>
        {devices.map((entityId) => (
          <Device key={entityId} entityId={entityId} />
        ))}
        {customDevices.map((device) => (
          <Device
            key={device.device_id + device.type}
            entityId={null}
            type={device.type}
            deviceId={device.device_id}
            areaId={area.area_id}
          />
        ))}
      </Devices>
    </ControlsSection>
  )
}
export default Area
