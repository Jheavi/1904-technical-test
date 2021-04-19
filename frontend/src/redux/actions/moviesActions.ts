import axios from 'axios'
import movieDbUrls from '../../constants/urls'
import { AppDispatch } from '../configureStore'
import actionTypes from './actionTypes'

function loadPopularMoviesSuccess (movieList: any) {
  return {
    type: actionTypes.LOAD_MOVIES,
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
