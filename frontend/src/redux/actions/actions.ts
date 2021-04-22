import axios from 'axios'
import { AnyAction } from 'redux'
import movieDbUrls from '../../constants/urls'
import { Movie, Show } from '../../interfaces/interfaces'
import { AppDispatch } from '../configureStore'
import actionTypes from './actionTypes'

function loadError (error: any) {
  return {
    type: actionTypes.LOAD_ERROR,
    error
  }
}

function loadPopularMoviesSuccess (movieList: Movie[]): AnyAction {
  return {
    type: actionTypes.LOAD_POPULAR_MOVIES,
    movieList,
    error: null
  }
}

export function loadPopularMovies () {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.popularFilms)

      dispatch(loadPopularMoviesSuccess(results.map((movie: Movie) => ({ ...movie, type: 'Movie' }))))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

function loadPopularShowsSuccess (showList: Show[]): AnyAction {
  return {
    type: actionTypes.LOAD_POPULAR_SHOWS,
    showList,
    error: null
  }
}

export function loadPopularShows () {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.popularShows)

      dispatch(loadPopularShowsSuccess(results.map((show: Show) => ({ ...show, type: 'Show' }))))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

function loadMovieDetailSuccess (movie: Movie) {
  return {
    type: actionTypes.LOAD_MOVIE_DETAIL,
    movie,
    error: null
  }
}

export function loadMovieDetail (movieId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.get(movieDbUrls.movieDetail(movieId))

      dispatch(loadMovieDetailSuccess(data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

function loadSimilarMoviesSuccess (similarMovies: Movie[]) {
  return {
    type: actionTypes.LOAD_SIMILAR_MOVIES,
    similarMovies,
    error: null
  }
}

export function loadSimilarMovies (movieId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.similarMovies(movieId))

      dispatch(loadSimilarMoviesSuccess(results.map((movie: Movie) => ({ ...movie, type: 'Movie' }))))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

function loadShowDetailSuccess (show: Show) {
  return {
    type: actionTypes.LOAD_SHOW_DETAIL,
    show,
    error: null
  }
}

export function loadShowDetail (showId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.get(movieDbUrls.showDetail(showId))

      dispatch(loadShowDetailSuccess(data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

function loadSimilarShowsSuccess (similarShows: Show[]) {
  return {
    type: actionTypes.LOAD_SIMILAR_SHOWS,
    similarShows,
    error: null
  }
}

export function loadSimilarShows (showId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: { results } } = await axios.get(movieDbUrls.similarShows(showId))

      dispatch(loadSimilarShowsSuccess(results.map((show: Show) => ({ ...show, type: 'Show' }))))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
