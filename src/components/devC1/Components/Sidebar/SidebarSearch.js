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

import {
  getLocationInfo,
  getLocationWeather,
  getUserCurrentLocationCity,
} from '../../Action/weatherAction'

const SidebarSearch = () => {
  const dispatch = useDispatch()
  const [isSearch, setIsSearch] = useState(false)
  const [isError, setIsError] = useState()
  const [todayWeather, setTodayWeather] = useState()
  const [country, setCountry] = useState('')
  const [defaultCountry, setDefaultCountry] = useState('london')
  const [isWoeid, setIsWoeid] = useState('44418')
  const [location, setLocation] = useState({})
  const locationInfo = useSelector((state) => state.locationInfo)
  const { loading, error, locationList } = locationInfo
  const weatherInfo = useSelector((state) => state.weatherInfo)
  const {
    loading: weatherLoading,
    error: weatherError,
    weatherData,
  } = weatherInfo
  const positionInfo = useSelector((state) => state.positionInfo)
  const {
    loading: positionLoading,
    error: positionError,
    nearestCity,
  } = positionInfo

  const getTodayWeatherInfo = () => {
    if (!weatherLoading) {
      const { consolidated_weather } = weatherData
      const slicedArray = consolidated_weather.slice(0, 1)

      setTodayWeather(slicedArray)
    }
  }

  const getLocationGeo = () => {
    setIsSearch(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      setIsError('Geolocation is not supported by this browser')
    }
  }

  const showPosition = (position) => {
    const data = {
      lat: position.coords.latitude,
      lag: position.coords.longitude,
    }

    dispatch(getUserCurrentLocationCity(data))
  }

  useEffect(() => {
    if ((!weatherData && weatherLoading) || weatherData.length === 0) {
      dispatch(getLocationWeather(isWoeid))
    } else {
      getTodayWeatherInfo()
    }
  }, [weatherData, isWoeid])

  const handleAddLocation = (e) => {
    e.preventDefault()

    dispatch(getLocationInfo(country))
    setCountry('')
  }

  const handleGetWeather = (woeid, title) => {
    setIsWoeid(woeid)
    setDefaultCountry(title)
    dispatch(getLocationWeather(woeid))
    setIsSearch(false)
  }

  return (
    <SideBar>
      <SearchContainer>
        {!isSearch ? (
          <>
            <div className='flex items-center justify-between'>
              <div onClick={() => setIsSearch(true)} className='search-btn'>
                Search for places
              </div>
              <i
                onClick={() => getLocationGeo()}
                className='position fas fa-street-view'
              ></i>
            </div>
          </>
        ) : (
          <>
            <div className='relative flex flex-col items-start justify-center'>
              <i
                onClick={() => setIsSearch(false)}
                className='x-icon fas fa-times fa-lg'
              ></i>
              <div className='w-full mt-6 flex items-center justify-start'>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className='search-input'
                  type='text'
                  placeholder='search location'
                />
                <button
                  onClick={(e) => handleAddLocation(e)}
                  className='search-submit-btn'
                >
                  Search
                </button>
              </div>
              {error && <h3 className='py-2 text-red-600'>{error}</h3>}
            </div>
          </>
        )}
      </SearchContainer>
      {!isSearch ? (
        <TodayInfoContainer>
          {todayWeather &&
            todayWeather.map((x) => {
              const { weather_state_name, the_temp, applicable_date } = x

              const WeatherImg = () => {
                if (weather_state_name) {
                  if (weather_state_name === 'Showers') {
                    return <img src={Clear} alt='' />
                  } else if (weather_state_name === 'Heavy Cloud') {
                    return <img src={HeavyCloud} alt='' />
                  } else if (weather_state_name === 'Heavy Rain') {
                    return <img src={HeavyRain} alt='' />
                  } else if (weather_state_name === 'Light Cloud') {
                    return <img src={LightCloud} alt='' />
                  } else if (weather_state_name === 'Light Rain') {
                    return <img src={LightRain} alt='' />
                  } else if (weather_state_name === 'Sleet') {
                    return <img src={Sleet} alt='' />
                  } else if (weather_state_name === 'Snow') {
                    return <img src={Snow} alt='' />
                  } else if (weather_state_name === 'Thunderstorm') {
                    return <img src={Thunderstorm} alt='' />
                  }
                }
              }
              return (
                <>
                  <ImageContainer>
                    <WeatherImg />
                  </ImageContainer>
                  <div className='temp-info'>
                    <h1>{Math.round(the_temp)}</h1>
                    <div className='temp-icon'>
                      <i className='far fa-circle'></i>
                      <p>C</p>
                    </div>
                  </div>
                  <h2 className='weather-type'>{weather_state_name}</h2>
                  <h3 className='date-time'>
                    Today <i className='dot fas fa-circle fa-xs'></i>{' '}
                    {applicable_date}
                  </h3>
                  <h4 className='city-name'>
                    {defaultCountry.charAt(0).toUpperCase() +
                      defaultCountry.slice(1)}
                  </h4>
                </>
              )
            })}
        </TodayInfoContainer>
      ) : (
        <CityListContainer>
          {!loading && locationList && (
            <>
              {locationList.map((x) => {
                const { woeid, title } = x

                return (
                  <CityListBtn
                    key={woeid}
                    onClick={() => handleGetWeather(woeid, title)}
                  >
                    {title}
                    <i className='fas fa-chevron-right fas-sm'></i>
                  </CityListBtn>
                )
              })}
            </>
          )}
          {!positionLoading && !positionError && (
            <>
              <h1 className='near-city-title'>Nearest City</h1>
              {nearestCity.map((x) => {
                const { woeid, title } = x

                return (
                  <CityListBtn
                    key={woeid}
                    onClick={() => handleGetWeather(woeid, title)}
                  >
                    {title}
                    <i className='fas fa-chevron-right fas-sm'></i>
                  </CityListBtn>
                )
              })}
            </>
          )}
        </CityListContainer>
      )}
    </SideBar>
  )
}

const SideBar = styled.div`
  ${tw`
    pb-4
    h-full
    w-full
    md:max-w-md
    min-w-[320px]
    bg-gray-800
    flex
    flex-col
  `}
`

const SearchContainer = styled.div`
  ${tw`
    w-full
    py-6
    px-4
  `}

  .search-btn {
    ${tw`
        py-2
        px-5
        text-gray-200
        bg-gray-500
        cursor-pointer
        hover:bg-gray-400
        transition
        duration-200
        ease-out
    `}
  }

  .position {
    ${tw`
        p-2
        bg-gray-500
        text-gray-200
        rounded-full
        cursor-pointer
        hover:bg-gray-400
        transition
        duration-200
        ease-out
    `}
  }

  .search-input {
    ${tw`
      flex-grow
      mr-3
      px-3
      py-2
      border-2
      border-gray-500
      bg-transparent
      text-gray-500
      md:text-lg
      hover:border-gray-400
      focus:outline-none
      transition
      duration-200
      ease-out
    `}
  }

  .search-submit-btn {
    ${tw`
      py-[10px]
      px-4
      md:text-lg
      text-gray-200
      bg-blue-700
      font-semibold
      hover:bg-blue-600
      transition
      duration-200
      ease-out
    `}
  }

  .x-icon {
    ${tw`
      ml-auto
      py-2
      px-2
      text-gray-400
      hover:bg-gray-700
      cursor-pointer
      transition
      duration-200
      ease-out
    `}
  }
`

const TodayInfoContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    justify-center
  `}

  .temp-info {
    ${tw`
      flex
      items-end
      justify-center
    `}

    h1 {
      ${tw`
        mt-6
        text-6xl
        md:text-7xl
        lg:text-8xl
        font-semibold
        text-gray-300
      `}
    }

    .temp-icon {
      ${tw`
        flex
        items-start
        justify-center
        text-gray-400
      `}

      i {
        ${tw`
          text-xs
        `}
      }

      p {
        ${tw`
          text-3xl
          md:text-5xl
          lg:text-6xl
        `}
      }
    }
  }

  .weather-type {
    ${tw`
      py-20
      text-gray-400
      font-semibold
      text-2xl
      md:text-4xl
    `}
  }

  .date-time {
    ${tw`
      text-lg
      text-gray-400
    `}

    .dot {
      ${tw`
        px-4
        text-xs
      `}
    }
  }

  .city-name {
    ${tw`
      pt-8
      text-lg
      text-gray-400
    `}
  }
`

const ImageContainer = styled.div`
  ::before {
    content: '';
    background-image: url(${CloudBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 20px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0.2;
  }

  ${tw`
    relative
    w-full
    h-52
    sm:h-56
    md:h-64
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
      -ml-2
      h-40
      w-40
      object-scale-down
    `}
  }
`

const CityListContainer = styled.div`
  ${tw`
    w-full
    px-4
    flex
    flex-col
    items-start
    justify-center
  `}

  .near-city-title {
    ${tw`
      mt-4
      mb-2
      px-2
      text-lg
      font-semibold
      text-gray-300
    `}
  }
`

const CityListBtn = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    py-3
    px-2
    w-full
    text-gray-400
    hover:ring-1
    ring-gray-400
    hover:text-gray-300
    cursor-pointer
    transition
    duration-200
    ease-out
  `}

  i {
    ${tw`
      hidden
      text-sm
      text-gray-500
    `}
  }

  :hover {
    i {
      ${tw`
        inline-flex
      `}
    }
  }
`

export default SidebarSearch
