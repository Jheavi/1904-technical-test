import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'

export default function showsReducer (state = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_POPULAR_SHOWS:
      return { ...state, popularShows: action.showList }
    default:
      return state
  }
}
