import React from 'react'
import { act, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Detail from './Detail'
import * as actions from '../../redux/actions/actions'

jest.mock('../../redux/actions/actions')
jest.mock('../../components/ItemListDetail/ItemListDetail')

const buildStore = configureMockStore([thunk])

describe('Given a Detail component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    jest.spyOn(actions, 'loadMovieDetail').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadSimilarMovies').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadShowDetail').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadSimilarShows').mockReturnValue({ type: '' })
  })

  describe('When is rendered with product "movies" and without movie loaded', () => {
    test('Then should call loadMovieDetail', () => {
      const mockedInitialState = {
        moviesReducer: {
          movie: {},
          similarMovies: []
        },
        showsReducer: {}
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Detail product="movies"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      expect(actions.loadMovieDetail).toHaveBeenCalled()
    })
  })

  describe('When is rendered with product "shows" and without show loaded', () => {
    test('Then should call loadShowDetail', () => {
      const mockedInitialState = {
        moviesReducer: {},
        showsReducer: {
          show: {},
          similarShows: []
        }
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Detail product="shows"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      expect(actions.loadShowDetail).toHaveBeenCalled()
    })
  })

  describe('When is rendered with product "movies" and with a similar movies list with 3 elements', () => {
    test('Then should render ItemListDetail 3 times', () => {
      const mockedInitialState = {
        moviesReducer: {
          movie: {},
          similarMovies: [
            { id: 1 },
            { id: 2 },
            { id: 3 }
          ]
        },
        showsReducer: {}
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Detail product="movies"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      const itemDetailsMocked = document.querySelectorAll('span')

      // three span already present in Detail component plus three for the mocked component
      expect(itemDetailsMocked.length).toBe(3 + 3)
    })
  })

  describe('When is rendered with product "shows" and with a similar shows list with 5 elements', () => {
    test('Then should render ItemListDetail 5 times', () => {
      const mockedInitialState = {
        moviesReducer: { },
        showsReducer: {
          show: {},
          similarShows: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
          ]
        }
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Detail product="shows"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      const itemDetailsMocked = document.querySelectorAll('span')

      // three span already present in Detail component plus five for the mocked component
      expect(itemDetailsMocked.length).toBe(3 + 5)
    })
  })

  describe('When is rendered without product', () => {
    test('should not call loadMovieDetail nor loadShowDetail', () => {
      const mockedInitialState = {
        moviesReducer: { similarMovies: [] },
        showsReducer: { similarShows: [] }
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Detail />
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      expect(actions.loadMovieDetail).not.toHaveBeenCalled()
      expect(actions.loadShowDetail).not.toHaveBeenCalled()
    })
  })
})
