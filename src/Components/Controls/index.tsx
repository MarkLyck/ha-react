import styled from '@emotion/styled'
import ControlsSection from './ControlsSection'
import { LightCard, ThermostatCard, VacuumCard } from 'src/Components/Cards'
import { TemperatureSensor, HumiditySensor } from 'src/Components/Sensors'
// import {
//   CameraCard,
//   FanCard,
//   LightCard,
//   SceneCard,
//   SensorCard,
//   ThermostatCard,
// } from '../../packages/hass-homekit-react-components/src'

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
        <ControlsSection title="Office">
          <Sensors>
            <TemperatureSensor
              hass={hass}
              entityId="sensor.office_temperature"
            />
          </Sensors>
          <Components>
            <LightCard hass={hass} entityId="light.desk_light" />
            {/* <ThermostatCard
              hass={hass}
              entityId="climate.thermostat_salon_climate"
            /> */}
          </Components>
        </ControlsSection>
        <ControlsSection title="Hallway">
          <Sensors>
            <TemperatureSensor
              hass={hass}
              entityId="sensor.my_ecobee_temperature"
            />
            <HumiditySensor hass={hass} entityId="sensor.my_ecobee_humidity" />
          </Sensors>
          <Components>
            <ThermostatCard hass={hass} entityId="climate.ecobee" />
          </Components>
        </ControlsSection>
        <ControlsSection title="Living room">
          <Components>
            <VacuumCard hass={hass} entityId="vacuum.vacuum" />
          </Components>
        </ControlsSection>
        <ControlsSection title="Bedroom">
          <Sensors>
            <TemperatureSensor
              hass={hass}
              entityId="sensor.bedroom_sensor_temperature"
            />
          </Sensors>
          <Components>
            <LightCard hass={hass} entityId="light.bedroom" />
            <LightCard hass={hass} entityId="light.bedroom_lamp" />
          </Components>
        </ControlsSection>
        {/* <ControlsSection>
          <Title>Chambre</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_chambre" />
            <LightCard hass={hass} entityId="light.lampe_chevet_gauche" />
            <LightCard hass={hass} entityId="light.lampe_chevet_droite" />
          </Components>
        </ControlsSection> */}
        {/* <ControlsSection>
          <Title>Bureau</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_bureau" />
          </Components>
        </ControlsSection> */}
        {/* <ControlsSection>
          <Title>Salle de bain</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_salledebain" />
            <SensorCard
              hass={hass}
              name="Temperature"
              entityId="sensor.capteur_temp_sdb_temperature"
              value="temperature"
              unit="°"
            />
            <SensorCard
              hass={hass}
              name="Humidité"
              entityId="sensor.capteur_temp_sdb_temperature"
              value="humidity"
              unit="%"
            />
            <FanCard hass={hass} entityId="switch.ventilation_salle_de_bain" />
          </Components>
        </ControlsSection> */}
      </ControlsLeft>
      <ControlsRight>
        {/* <ControlsSection>
          <Title>Scènes</Title>
          <CardContainers>
            <SceneCard
              hass={hass}
              entityId="scene.cozy"
              icon={<FontAwesomeIcon icon={faMoon} />}
            />
          </CardContainers>
        </ControlsSection> */}
        {/* <ControlsSection>
          <Title>Caméra</Title>
          <Components>
            <CameraCard hass={hass} entityId="camera.camera_sejour" />
            <CameraCard hass={hass} entityId="camera.camera_balcon" />
          </Components>
        </ControlsSection> */}
      </ControlsRight>
    </ControlsContainer>
  )
}

export default Controls
