import Axios from 'axios'
import {
  WEATHER_INFO_FAIL,
  WEATHER_INFO_REQUEST,
  WEATHER_INFO_SUCCESS,
  LOCATION_INFO_REQUEST,
  LOCATION_INFO_SUCCESS,
  LOCATION_INFO_FAIL,
  LOCATION_POSITION_REQUEST,
  LOCATION_POSITION_FAIL,
  LOCATION_POSITION_SUCCESS,
} from '../Constant/weatherConstant'

export const getUserCurrentLocationCity = (position) => async (dispatch) => {
  dispatch({
    type: LOCATION_POSITION_REQUEST,
  })

  try {
    if (position) {
      const { data } = await Axios.get(
        `https://www.metaweather.com/api/location/search/?lattlong=${position.lat},${position.lag}`
      )

      if (data) {
        dispatch({
          type: LOCATION_POSITION_SUCCESS,
          payload: data,
        })
      }
    }
  } catch (err) {
    dispatch({
      type: LOCATION_POSITION_FAIL,
      payload: err,
    })
  }
}

export const getLocationInfo = (location) => async (dispatch, getState) => {
  dispatch({
    type: LOCATION_INFO_REQUEST,
  })

  try {
    if (location && location.trim() !== '') {
      const toLowerCaseLocation = location.toLowerCase()
      const { data } = await Axios.get(
        `https://www.metaweather.com/api/location/search/?query=${toLowerCaseLocation}`
      )

      if (data) {
        const [objectData] = data
        dispatch({
          type: LOCATION_INFO_SUCCESS,
          payload: {
            title: objectData.title,
            location: objectData.location,
            woeid: objectData.woeid,
            latt_long: objectData.latt_long,
          },
        })
      }
    }
  } catch (err) {
    dispatch({
      type: LOCATION_INFO_FAIL,
      payload: err,
    })
  }
}

export const getLocationWeather = (worldid) => async (dispatch) => {
  dispatch({
    type: WEATHER_INFO_REQUEST,
  })

  try {
    if (!worldid) {
      const { data } = await Axios.get(
        'https://www.metaweather.com/api/location/44418/'
      )

      if (data) {
        dispatch({
          type: WEATHER_INFO_SUCCESS,
          payload: data,
        })
      }
    } else {
      const { data } = await Axios.get(
        `https://www.metaweather.com/api/location/${worldid}/`
      )

      if (data) {
        dispatch({
          type: WEATHER_INFO_SUCCESS,
          payload: data,
        })
      }
    }
  } catch (err) {
    dispatch({
      type: WEATHER_INFO_FAIL,
      payload: err,
    })
  }
}
