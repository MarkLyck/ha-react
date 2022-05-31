import { styled } from '@stitches/react'
import { TimeView, DateView } from 'src/Components/Widgets'
import { WeatherCard } from 'src/Components/Widgets'

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

type PanelProps = {
  hass: any
}

const Panel = (props: PanelProps) => {
  return (
    <PanelContainer>
      <TimeView />
      <DateView />
      <PanelSection>
        <WeatherCard hass={props.hass} cities={cities} />
      </PanelSection>
    </PanelContainer>
  )
}

export default Panel
