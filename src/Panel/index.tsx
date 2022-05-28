import { styled } from '@stitches/react'
import { TimeView, DateView } from 'src/Components/Widgets'
import { WeatherCard } from 'src/Components/Cards'
// import {
//   AlarmCard,
//   DateView,
//   RecallCard,
//   TimeView,
//   WeatherCard,
// } from '../../packages/widgets-homekit-react-components/src'
// import { PanelSection } from '../../packages/widgets-homekit-react-components/src'

const PanelContainer = styled('div', {
  height: '100%',
  width: 360,
  padding: 30,
  boxSizing: 'border-box',
  backgroundColor: '#20202050',
})

const PanelSection = styled('div', {
  marginTop: 20,
})

const cities = ['Montreal,CA', 'Saint-Avold,FR']

const alarmSensors = [
  'binary_sensor.porte_entree_contact',
  'binary_sensor.porte_balcon_contact',
  'binary_sensor.fenetre_chambre_contact',
]

type PanelProps = {
  hass: any
}

const Panel = (props: PanelProps) => {
  console.log('🔈 ~ Panel props', props)
  return (
    <PanelContainer>
      <TimeView />
      <DateView />
      <PanelSection>
        <WeatherCard hass={props.hass} cities={cities} />
      </PanelSection>
      {/* 
      <PanelSection>
        <WeatherCard hass={props.hass} cities={cities} />
      </PanelSection>
      <PanelSection>
        <RecallCard hass={props.hass} />
      </PanelSection>
      <PanelSection>
        <AlarmCard hass={props.hass} alarmSensors={alarmSensors} />
      </PanelSection> */}
    </PanelContainer>
  )
}

export default Panel
