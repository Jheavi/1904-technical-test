import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../initialState'

export default function showsReducer (state = initialState.showsReducer, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_POPULAR_SHOWS:
      return { ...state, popularShows: action.showList }
    case actionTypes.LOAD_SHOW_DETAIL:
      return { ...state, show: action.show }
    case actionTypes.LOAD_SIMILAR_SHOWS:
      return { ...state, similarShows: action.similarShows.slice(0, 6) }
    default:
      return state
  }
}
