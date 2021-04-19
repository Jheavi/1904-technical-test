import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'

export default function moviesReducer (state = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return { ...state, popularMovies: action.movieList }

    default:
      return state
  }
}
