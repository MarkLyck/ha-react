import { styled } from '@stitches/react'
import { LightCard } from 'src/Components/Cards'
import ControlsSection from './ControlsSection'
// import {
//   CameraCard,
//   FanCard,
//   LightCard,
//   SceneCard,
//   SensorCard,
//   ThermostatCard,
// } from '../../packages/hass-homekit-react-components/src'

const ControlsContainer = styled('div', {
  height: '100%',
  width: 1300,
  padding: 30,
  boxSizing: 'border-box',
})

const ControlsLeft = styled('div', {
  marginRight: 20,
  float: 'left',
})

const ControlsRight = styled('div', {
  float: 'left',
})

// const CardContainers = styled('div', {
//   width: 400,
// })

const Components = styled('div', {
  '& > div': {
    margin: '12px 12px 12px 0px',
  },
})

type ControlsProps = {
  hass: any
}

const Controls = ({ hass }: ControlsProps) => {
  return (
    <ControlsContainer>
      <ControlsLeft>
        <ControlsSection title="Office">
          <Components>
            <LightCard hass={hass} entityId="light.desk_light" />
            <LightCard hass={hass} entityId="light.desk_light" />
            <LightCard hass={hass} entityId="light.desk_light" />
            {/* <ThermostatCard
              hass={hass}
              entityId="climate.thermostat_salon_climate"
            /> */}
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
