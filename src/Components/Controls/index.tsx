import styled from '@emotion/styled'
import ControlsSection from './ControlsSection'
import { LightCard, ThermostatCard, VacuumCard } from 'src/Components/Cards'
import {
  TemperatureSensor,
  HumiditySensor,
  OccupancySensor,
} from 'src/Components/Sensors'
import Test from '../Test'

const ControlsContainer = styled.div`
  height: 100%;
  width: 1300px;
  padding: 30px;
  box-sizing: border-box;
`

const ControlsLeft = styled.div`
  margin-right: 20px;
  float: left;
`

const ControlsRight = styled.div`
  float: left;
})`

const Components = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Sensors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`

type ControlsProps = {
  hass: any
}

const Controls = ({ hass }: ControlsProps) => {
  console.log('🔈 ~ hass', hass)
  return (
    <ControlsContainer>
      <ControlsLeft>
        <ControlsSection
          title="Office"
          extra={
            <Sensors>
              <TemperatureSensor
                hass={hass}
                entityId="sensor.office_temperature"
              />
              <OccupancySensor
                hass={hass}
                entityId="binary_sensor.office_occupancy"
              />
            </Sensors>
          }
        >
          <Components>
            <LightCard hass={hass} entityId="light.desk_light" />
            {/* <ThermostatCard
              hass={hass}
              entityId="climate.thermostat_salon_climate"
            /> */}
          </Components>
        </ControlsSection>
        <ControlsSection
          title="Hallway"
          extra={
            <Sensors>
              <TemperatureSensor
                hass={hass}
                entityId="sensor.my_ecobee_temperature"
              />
              <HumiditySensor
                hass={hass}
                entityId="sensor.my_ecobee_humidity"
              />
              <OccupancySensor
                hass={hass}
                entityId="binary_sensor.my_ecobee_occupancy"
              />
            </Sensors>
          }
        >
          <Components>
            <ThermostatCard hass={hass} entityId="climate.ecobee" />
          </Components>
        </ControlsSection>
        <ControlsSection title="Living room">
          <Components>
            <VacuumCard hass={hass} entityId="vacuum.vacuum" />
          </Components>
        </ControlsSection>
        <ControlsSection
          title="Bedroom"
          extra={
            <Sensors>
              <TemperatureSensor
                hass={hass}
                entityId="sensor.bedroom_sensor_temperature"
              />
              <OccupancySensor
                hass={hass}
                entityId="binary_sensor.bedroom_sensor_occupancy"
              />
            </Sensors>
          }
        >
          <Components>
            <LightCard hass={hass} entityId="light.bedroom" />
            <LightCard hass={hass} entityId="light.bedroom_lamp" />
          </Components>
        </ControlsSection>
        <Test hass={hass} />
      </ControlsLeft>
    </ControlsContainer>
  )
}

export default Controls
