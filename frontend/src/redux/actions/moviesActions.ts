import axios from 'axios'
import movieDbUrls from '../../constants/urls'
import { Movie, Show } from '../../interfaces/interfaces'
import { AppDispatch } from '../configureStore'
import actionTypes from './actionTypes'

function loadPopularMoviesSuccess (movieList: Movie[]) {
  return {
    type: actionTypes.LOAD_POPULAR_MOVIES,
    movieList
  }
}

export function loadPopularMovies () {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.popularFilms)

      dispatch(loadPopularMoviesSuccess(results))
    } catch (error) {
      console.log(error)
    }
  }
}

function loadPopularShowsSuccess (showList: Show[]) {
  return {
    type: actionTypes.LOAD_POPULAR_SHOWS,
    showList
  }
}

export function loadPopularShows () {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.popularShows)

      dispatch(loadPopularShowsSuccess(results))
    } catch (error) {
      console.log(error)
    }
  }
}
