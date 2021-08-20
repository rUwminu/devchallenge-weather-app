import {
  WEATHER_INFO_FAIL,
  WEATHER_INFO_REQUEST,
  WEATHER_INFO_SUCCESS,
  LOCATION_INFO_REQUEST,
  LOCATION_INFO_SUCCESS,
  LOCATION_INFO_FAIL,
  LOCATION_POSITION_REQUEST,
  LOCATION_POSITION_SUCCESS,
  LOCATION_POSITION_FAIL,
} from '../Constant/weatherConstant'

export const userCurrentLocationCityReducer = (
  state = { loading: true, nearestCity: [] },
  action
) => {
  switch (action.type) {
    case LOCATION_POSITION_REQUEST:
      return { loading: true, nearestCity: [] }
    case LOCATION_POSITION_SUCCESS:
      return { loading: false, nearestCity: action.payload }
    case LOCATION_POSITION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const locationInfoReducer = (
  state = { loading: true, locationList: [] },
  action
) => {
  switch (action.type) {
    case LOCATION_INFO_REQUEST:
      return { loading: true, locationList: [...state.locationList] }
    case LOCATION_INFO_SUCCESS:
      const city = action.payload
      const existCity = state.locationList.find((x) => x.woeid === city.woeid)

      if (!existCity) {
        return {
          ...state,
          loading: false,
          locationList: [...state.locationList, city],
        }
      } else {
        // Filter the city name out of array and add the city to the top of array
        const newArray = state.locationList.filter(
          (x) => x.woeid === city.woeid
        )
        return {
          loading: false,
          locationList: [...newArray, city],
        }
      }
    case LOCATION_INFO_FAIL:
      return { ...state, loading: false, error: 'No Such City Name' }
    default:
      return state
  }
}

export const weatherInfoReducer = (
  state = { loading: true, weatherData: [] },
  action
) => {
  switch (action.type) {
    case WEATHER_INFO_REQUEST:
      return { loading: true }
    case WEATHER_INFO_SUCCESS:
      return { loading: false, weatherData: action.payload }
    case WEATHER_INFO_FAIL:
      return {...state, loading: false, error: action.payload }
    default:
      return state
  }
}
