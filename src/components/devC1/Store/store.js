import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  locationInfoReducer,
  userCurrentLocationCityReducer,
  weatherInfoReducer,
} from '../Reducers/weatherReducer'

const initialState = {
  locationInfo: { locationList: [] },
}

const reducer = combineReducers({
  locationInfo: locationInfoReducer,
  weatherInfo: weatherInfoReducer,
  positionInfo: userCurrentLocationCityReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
