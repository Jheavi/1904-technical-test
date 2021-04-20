import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store'
import axios from 'axios'
import actionTypes from './actionTypes'
import thunk from 'redux-thunk'
import { loadMovieDetail, loadPopularMovies, loadPopularShows, loadShowDetail, loadSimilarMovies, loadSimilarShows } from './actions'
import movieDbUrls from '../../constants/urls'
import { AppDispatch } from '../configureStore'

jest.mock('axios')

const mockStore = configureMockStore([thunk])

describe('Actions', () => {
  let fakeData: { data: { results: [{ title: string }]}}
  let dispatch: AppDispatch
  let store: MockStoreEnhanced<unknown, {}> | null
  const fakeId = '12'

  beforeEach(() => {
    store = mockStore()
    dispatch = store.dispatch
    fakeData = { data: { results: [{ title: 'New Movie' }] } }
  })

  describe('Given a loadPopularMovies action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the popular films url', async () => {
        await loadPopularMovies()(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.popularFilms)
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_POPULAR_MOVIES', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadPopularMovies()(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_POPULAR_MOVIES,
          movieList: fakeData.data.results,
          error: null
        })
      })
    })
  })

  describe('Given a loadPopularShows action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the popular shows url', async () => {
        await loadPopularShows()(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.popularShows)
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_POPULAR_SHOWS', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadPopularShows()(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_POPULAR_SHOWS,
          showList: fakeData.data.results,
          error: null
        })
      })
    })
  })

  describe('Given a loadMovieDetail action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the movie detail url', async () => {
        await loadMovieDetail(fakeId)(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.movieDetail(fakeId))
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_MOVIE_DETAIL', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadMovieDetail(fakeId)(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_MOVIE_DETAIL,
          movie: fakeData.data,
          error: null
        })
      })
    })
  })

  describe('Given a loadShowDetail action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the show detail url', async () => {
        await loadShowDetail(fakeId)(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.showDetail(fakeId))
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_SHOW_DETAIL', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadShowDetail(fakeId)(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_SHOW_DETAIL,
          show: fakeData.data,
          error: null
        })
      })
    })
  })

  describe('Given a loadSimilarMovies action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the similar movies url', async () => {
        await loadSimilarMovies(fakeId)(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.similarMovies(fakeId))
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_SIMILAR_MOVIES', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadSimilarMovies(fakeId)(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_SIMILAR_MOVIES,
          similarMovies: fakeData.data.results,
          error: null
        })
      })
    })
  })

  describe('Given a loadSimilarShows action', () => {
    describe('When is called', () => {
      test('Then axios.get should be called with the similar shows url', async () => {
        await loadSimilarShows(fakeId)(dispatch)

        expect(axios.get).toHaveBeenCalledWith(movieDbUrls.similarShows(fakeId))
      })
    })

    describe('When axios returns a resolved promise', () => {
      test('Then the store should have an action with type LOAD_SIMILAR_SHOWS', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadSimilarShows(fakeId)(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_SIMILAR_SHOWS,
          similarShows: fakeData.data.results,
          error: null
        })
      })
    })
  })
})
