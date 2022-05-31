// import React, { useEffect, useState } from 'react'
import { styled } from '@stitches/react'
// import { WeatherRow } from './WeatherRow'
import { CardTitle, CardContainer } from '../../Cards/common'
// import { getWeather } from '../../stores/weather'

const WeatherCardContainer = styled(CardContainer, {
  width: '100%',
  height: 'initial',
  padding: '0px',
  cursor: 'unset',
})

// async function loadWeathers(cities) {
//   const promises = cities.map((city) => getWeather(city))
//   const results = await Promise.all(promises)
//   return results
// }

export const WeatherCard = (props: any) => {
  // const [weather, setWeather] = useState()

  // useEffect(() => {
  // loadWeathers(props.cities).then((results) => {
  //   setWeather(results)
  // })
  // }, [])

  return (
    <WeatherCardContainer>
      <CardTitle>Weather</CardTitle>
      {/* {weather && weather.map((w) => <WeatherRow key={w.city} weather={w} />)} */}
    </WeatherCardContainer>
  )
}
