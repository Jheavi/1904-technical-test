import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import showsReducer from './showsReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({ errorReducer, moviesReducer, showsReducer })

export default rootReducer
