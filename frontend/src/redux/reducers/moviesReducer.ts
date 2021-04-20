import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../initialState'

export default function moviesReducer (state = initialState.moviesReducer, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_POPULAR_MOVIES:
      return { ...state, popularMovies: action.movieList }
    case actionTypes.LOAD_SIMILAR_MOVIES:
      return { ...state, similarMovies: action.similarMovies.slice(0, 6) }
    default:
      return state
  }
}
