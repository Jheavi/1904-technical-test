import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store'
import axios from 'axios'
import actionTypes from './actionTypes'
import thunk from 'redux-thunk'
import { loadPopularMovies, loadPopularShows } from './actions'
import movieDbUrls from '../../constants/urls'
import { AppDispatch } from '../configureStore'

jest.mock('axios')

const mockStore = configureMockStore([thunk])

describe('Actions', () => {
  let fakeData: { data: { results: [{ title: string }]}}
  let dispatch: AppDispatch
  let store: MockStoreEnhanced<unknown, {}> | null

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
          movieList: fakeData.data.results
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
      test('Then the store should have an action with type LOAD_POPULAR_MOVIES', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(fakeData)

        await loadPopularShows()(dispatch)

        expect(store!.getActions()[0]).toEqual({
          type: actionTypes.LOAD_POPULAR_SHOWS,
          showList: fakeData.data.results
        })
      })
    })
  })
})
