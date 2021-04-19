import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../initialState'

export default function showsReducer (state = initialState.showsReducer, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_POPULAR_SHOWS:
      return { ...state, popularShows: action.showList }
    default:
      return state
  }
}
