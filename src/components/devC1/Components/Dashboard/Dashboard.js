import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// Images
import CloudBg from '../../Assets/Cloud-background.png'
import Clear from '../../Assets/Clear.png'
import Hail from '../../Assets/Hail.png'
import HeavyCloud from '../../Assets/HeavyCloud.png'
import HeavyRain from '../../Assets/HeavyRain.png'
import LightCloud from '../../Assets/LightCloud.png'
import LightRain from '../../Assets/LightRain.png'
import Shower from '../../Assets/Shower.png'
import Sleet from '../../Assets/Sleet.png'
import Snow from '../../Assets/Snow.png'
import Thunderstorm from '../../Assets/Thunderstorm.png'

const Dashboard = () => {
  const [todayWeather, setTodayWeather] = useState()
  const [forecastWeather, setForecastWeather] = useState()
  const weatherInfo = useSelector((state) => state.weatherInfo)
  const {
    loading: weatherLoading,
    error: weatherError,
    weatherData,
  } = weatherInfo

  const getForecastWeatherInfo = () => {
    if (!weatherLoading) {
      const { consolidated_weather } = weatherData
      const slicedArray = consolidated_weather.slice(1)

      setForecastWeather(slicedArray)
    }
  }

  const getTodayWeatherInfo = () => {
    if (!weatherLoading) {
      const { consolidated_weather } = weatherData
      const slicedArray = consolidated_weather.slice(0, 1)

      setTodayWeather(slicedArray)
    }
  }

  useEffect(() => {
    if (weatherData) {
      getForecastWeatherInfo()
      getTodayWeatherInfo()
    }
  }, [weatherData])

  return (
    <Container>
      <InnerContainer>
        <WeatherDegree>
          <div className='dregee-btn'>
            <h4>C</h4>
          </div>
          <div className='dregee-btn'>
            <h4>F</h4>
          </div>
        </WeatherDegree>
        <WeatherCardList>
          {forecastWeather &&
            forecastWeather.map((x) => {
              const {
                weather_state_name,
                max_temp,
                min_temp,
                applicable_date,
              } = x

              const WeatherImg = () => {
                if (weather_state_name) {
                  if (weather_state_name === 'Showers') {
                    return (
                      <img
                        src={Shower}
                        className='w-full max-w-[7rem] ml-3'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Clear') {
                    return (
                      <img
                        src={Clear}
                        className='w-full max-w-[7rem] ml-3 -translate-y-5'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Heavy Rain') {
                    return <img src={HeavyRain} className='w-full' alt='' />
                  } else if (weather_state_name === 'Heavy Cloud') {
                    return (
                      <img
                        src={HeavyCloud}
                        className='w-full max-w-[7rem] ml-3 -translate-y-5'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Light Cloud') {
                    return <img src={LightCloud} className='w-full' alt='' />
                  } else if (weather_state_name === 'Light Rain') {
                    return <img src={LightRain} className='w-full' alt='' />
                  } else if (weather_state_name === 'Hail') {
                    return (
                      <img
                        src={Hail}
                        className='w-full max-w-[7rem] ml-3 -translate-y-5'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Sleet') {
                    return (
                      <img
                        src={Sleet}
                        className='w-full max-w-[7rem] ml-3 -translate-y-5'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Snow') {
                    return (
                      <img
                        src={Snow}
                        className='w-full max-w-[7rem] ml-3 -translate-y-5'
                        alt=''
                      />
                    )
                  } else if (weather_state_name === 'Thunderstorm') {
                    return <img src={Thunderstorm} className='w-full' alt='' />
                  }
                }
              }

              console.log(WeatherImg())

              return (
                <Card>
                  <h1>{applicable_date}</h1>
                  <div className='weather-img'><WeatherImg /></div>
                  <div className='weather-temp'>
                    <h1>{max_temp.toFixed(0)}&#8451;</h1>
                    <h1>{min_temp.toFixed(0)}&#8451;</h1>
                  </div>
                </Card>
              )
            })}
        </WeatherCardList>
        <TodayWeatherInfo>
          <h1>Today's Hightlight</h1>
          {todayWeather &&
            todayWeather.map((x) => {
              const { visibility, humidity, air_pressure, wind_speed } = x
              return (
                <InfoGrid>
                  <InfoCard>
                    <h2>Wind status</h2>
                    <h1>
                      {wind_speed.toFixed(0)}
                      <span>mph</span>
                    </h1>
                  </InfoCard>
                  <InfoCard>
                    <h2>Humidity</h2>
                    <h1>
                      {humidity}
                      <span>%</span>
                    </h1>
                  </InfoCard>
                  <InfoCard>
                    <h2>Visibility</h2>
                    <h1>
                      {visibility.toFixed(0)}
                      <span>miles</span>
                    </h1>
                  </InfoCard>
                  <InfoCard>
                    <h2>Air Pressure</h2>
                    <h1>
                      {air_pressure}
                      <span>mb</span>
                    </h1>
                  </InfoCard>
                </InfoGrid>
              )
            })}
        </TodayWeatherInfo>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    py-8
    px-6
    h-full
    w-full
    flex
    flex-col
    items-center
    justify-center
    md:overflow-hidden
    md:overflow-y-auto
    md:scrollbar-hide
  `}
`

const InnerContainer = styled.div`
  ${tw`
    h-full
    w-full
    md:max-w-3xl
    lg:max-w-4xl
    flex
    flex-col
    items-center
    justify-start
  `}
`

const WeatherDegree = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    justify-center
    ml-auto
  `}

  .dregee-btn {
    ${tw`
        ml-3
        px-[18px]
        py-2
        text-lg
        font-semibold
        bg-gray-600
        text-gray-200
        rounded-full
        hover:text-gray-900
        hover:bg-gray-200
        transition
        duration-200
        ease-out
    `}
  }
`

const WeatherCardList = styled.div`
  ${tw`
    mt-7
    w-full
    flex
    flex-wrap
    items-center
    justify-around
  `}
`

const Card = styled.div`
  ${tw`
    mb-4
    px-2
    py-3
    w-[170px]
    min-w-[170px]
    bg-gray-700
    flex
    flex-col
    items-center
    justify-center
  `}

  h1 {
    ${tw`
        text-lg
        text-gray-300
    `}
  }

  .weather-img {
    ${tw`
        w-full
        overflow-hidden
    `}

    img {
      ${tw`
      -ml-3
      h-32
      w-full
      object-scale-down
    `}
    }
  }

  .weather-temp {
    ${tw`
        mt-4
        py-2
        px-6
        w-full
        flex
        flex-row
        items-center
        justify-between
    `}
  }
`

const TodayWeatherInfo = styled.div`
  ${tw`
    pt-8
    pb-6
    w-full
    flex
    flex-col
    items-start
    justify-center
  `}

  h1 {
    ${tw`
        mb-4
        text-lg
        lg:text-xl
        font-semibold
        text-gray-200
    `}
  }
`

const InfoGrid = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-16
    place-content-between
  `}
`

const InfoCard = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    h-40
    bg-gray-700
  `}

  h2 {
    ${tw`
        md:text-lg
        text-gray-200
    `}
  }

  h1 {
    ${tw`
        flex
        items-center
        py-4
        text-4xl
        lg:text-5xl
        font-semibold
    `}

    span {
      ${tw`
        pl-1
        text-xl
        lg:text-2xl
        font-normal
      `}
    }
  }
`

export default Dashboard
