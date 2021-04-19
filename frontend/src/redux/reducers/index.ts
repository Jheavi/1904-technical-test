import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import showsReducer from './showsReducer'

const rootReducer = combineReducers({ moviesReducer, showsReducer })

export default rootReducer
