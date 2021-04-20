import actionTypes from '../actions/actionTypes'
import initialState from '../initialState'
import moviesReducer from './moviesReducer'

describe('Given a moviesReducer function', () => {
  let fakeMovieList: [{ title: string }]
  let fakeMovie: { title: string }
  beforeEach(() => {
    fakeMovieList = [{ title: 'fakeTitle' }]
    fakeMovie = { title: 'fakeTitle' }
  })

  describe('When an undefined state is passed', () => {
    test('Then should return the initialState', () => {
      const reducerResult = moviesReducer(undefined, { type: '' })

      expect(reducerResult).toEqual(initialState.moviesReducer)
    })
  })

  describe('When an action with type LOAD_POPULAR_MOVIES is passed', () => {
    test('Then should return the movieList in a property called popularMovies', () => {
      const fakeAction = {
        type: actionTypes.LOAD_POPULAR_MOVIES,
        movieList: fakeMovieList
      }

      const reducerResult = moviesReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({
        popularMovies: fakeMovieList,
        similarMovies: []
      })
    })
  })

  describe('When an action with type LOAD_MOVIE_DETAIL is passed', () => {
    test('Then should return the movie object in a property called movie', () => {
      const fakeAction = {
        type: actionTypes.LOAD_MOVIE_DETAIL,
        movie: fakeMovie
      }

      const reducerResult = moviesReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({
        popularMovies: [],
        similarMovies: [],
        movie: fakeMovie
      })
    })
  })

  describe('When an action with type LOAD_SIMILAR_MOVIES is passed', () => {
    test('Then should return the similar movies list in a property called similarMovies', () => {
      const fakeAction = {
        type: actionTypes.LOAD_SIMILAR_MOVIES,
        similarMovies: fakeMovieList
      }

      const reducerResult = moviesReducer(undefined, fakeAction)

      expect(reducerResult).toEqual({
        popularMovies: [],
        similarMovies: fakeMovieList
      })
    })
  })
})
