import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../initialState'

export default function moviesReducer (state = initialState.moviesReducer, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_POPULAR_MOVIES:
      return { ...state, popularMovies: action.movieList }

    default:
      return state
  }
}
