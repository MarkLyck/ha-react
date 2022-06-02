import styled from '@emotion/styled'
import { Spin } from 'antd'
import useStore from 'src/lib/useStore'
import ControlsSection from './Controls/ControlsSection'
import Sensor from './Sensors/Sensor'
import Device from './Devices/Device'

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
    grid-template-columns: 1fr 1fr;
  }
`

const Devices = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
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

const SENSOR_TYPES = ['binary_sensor', 'sensor', 'device_tracker']
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

const HIDDEN = [
  'lock.tesla_door_lock',
  'sensor.tesla_battery_sensor',
  'sensor.tesla_energy_added_sensor',
  'sensor.tesla_temperature_sensor_outside',
  'select.tesla_heated_seat_left',
  'climate.tesla_hvac_climate_system',
  'lock.tesla_charger_door_lock',
  'select.tesla_heated_seat_rear_center',
  'select.tesla_heated_seat_right',
  'binary_sensor.tesla_charger_sensor',
  'sensor.tesla_range_sensor',
  'button.tesla_horn',
  'switch.tesla_maxrange_switch',
  'sensor.tesla_mileage_sensor',
  'binary_sensor.tesla_update_available_sensor',
  'switch.tesla_charger_switch',
  'select.tesla_heated_seat_rear_right',
  'sensor.tesla_temperature_sensor_inside',
  'switch.tesla_sentry_mode_switch',
  'lock.tesla_trunk_lock',
  'select.tesla_heated_seat_rear_left',
  'switch.tesla_heated_steering_switch',
  'switch.tesla_polling_switch',
  'lock.tesla_frunk_lock',
  'binary_sensor.tesla_online_sensor',
  'device_tracker.tesla_location_tracker',
  'sensor.tesla_charging_rate_sensor',
  'binary_sensor.tesla_parking_brake_sensor',
  'button.tesla_flash_lights',
]

const CUSTOM_CARDS: any = {
  room: {
    other: {
      devices: {
        tesla: true,
      },
      sensors: {},
    },
  },
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
        const entities = area.entities?.filter(
          (entity: any) => !HIDDEN.includes(entity)
        )

        let sensors: string[] =
          entities?.filter((entityId: string) =>
            SENSOR_TYPES.includes(entityId.split('.')[0])
          ) || []
        let devices: string[] =
          entities?.filter((entityId: string) =>
            DEVICE_TYPES.includes(entityId.split('.')[0])
          ) || []

        const miniSensors: string[] =
          sensors?.filter((entityId: string) => {
            let found = false
            MINI_SENSOR_TYPES.forEach((type) => {
              if (entityId.includes(type)) {
                found = true
              }
            })
            return found
          }) || []

        sensors = sensors.filter((entityId) => {
          let skip = false
          if (!miniSensors.includes(entityId)) skip = true
          return skip
        })

        const customRoomCards = CUSTOM_CARDS.room?.[area.name]
        if (customRoomCards?.devices) {
          const customDevices = Object.keys(customRoomCards?.devices)
          devices = [...devices, ...customDevices]
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
