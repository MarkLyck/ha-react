import { styled } from '@stitches/react'
import {
  DayClearIcon,
  DayPartlyCloudyIcon,
  NightClearIcon,
  NightPartlyCloudyIcon,
  FogIcon,
  CloudyIcon,
  ShowerIcon,
  SnowIcon,
  ThunderstormIcon,
} from 'src/assets/icons/weather'

const WeatherRowContainer = styled('div', {
  width: ' 100%',
  height: '46px',
  display: 'flex',
  padding: ' 10p;',
  alignItems: 'center',
  boxSizing: 'border-box',
})

const TimeCityContainer = styled('div', {
  flexGrow: 1,
})

const Time = styled('div', {
  color: '$neutral500',
  fontSize: 12,
})

const City = styled('div', {
  color: '$neutral100',
  fontSize: 12,
})

const Temperature = styled('div', {
  width: 36,
  textAlign: 'right',
  color: '$neutral100',
  fontSize: 18,
})

const Icon = styled('div', {
  width: 22,
  textAlign: 'center',
})

const Image = styled('img', {
  height: 'auto',
  width: 'auto',
  maxHeight: 18,
  maxWidth: 22,
})

export function WeatherRow(props: any) {
  const { weather } = props

  const format2Digits = (number: number) => ('0' + number).slice(-2)

  let weatherIcon = null
  let date = null

  if (weather) {
    date = new Date(
      new Date().getTime() + ((14400 + weather.timezone) / 60) * 60000
    )
    switch (weather.iconId) {
      case '01d': // Clear
        weatherIcon = DayClearIcon
        break
      case '01n':
        weatherIcon = NightClearIcon
        break
      case '02d': // Partly Cloudy
        weatherIcon = DayPartlyCloudyIcon
        break
      case '02n':
        weatherIcon = NightPartlyCloudyIcon
        break
      case '03d': // Cloud
        weatherIcon = CloudyIcon
        break
      case '03n':
        weatherIcon = CloudyIcon
        break
      case '04d': // Heavy cloud
        weatherIcon = CloudyIcon
        break
      case '04n':
        weatherIcon = CloudyIcon
        break
      case '09d': // Light Rain
        weatherIcon = ShowerIcon
        break
      case '09n':
        weatherIcon = ShowerIcon
        break
      case '10d': // Heavy Rain
        weatherIcon = ShowerIcon
        break
      case '10n':
        weatherIcon = ShowerIcon
        break
      case '11d': // Thunderstorm
        weatherIcon = ThunderstormIcon
        break
      case '11n':
        weatherIcon = ThunderstormIcon
        break
      case '13d': // Snow
        weatherIcon = SnowIcon
        break
      case '13n':
        weatherIcon = SnowIcon
        break
      case '50d': // Mist
        weatherIcon = FogIcon
        break
      case '50n':
        weatherIcon = FogIcon
        break
      default:
        weatherIcon = CloudyIcon
    }
  }

  if (!date) return null

  return (
    <WeatherRowContainer>
      <TimeCityContainer>
        <Time>
          {format2Digits(date.getHours())}:{format2Digits(date.getMinutes())}
        </Time>
        <City>{weather.city}</City>
      </TimeCityContainer>
      <Icon>
        {/* @ts-ignore */}
        <Image src={weatherIcon} />
      </Icon>
      <Temperature>{weather.temp}&#176;</Temperature>
    </WeatherRowContainer>
  )
}
