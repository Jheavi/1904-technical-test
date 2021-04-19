import React from 'react'
import { act, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Principal from './Principal'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../redux/actions/actions'
import initialState from '../../redux/initialState'

jest.mock('../../redux/actions/actions')
jest.mock('../../components/ItemDetail/ItemDetail')

const buildStore = configureMockStore([thunk])

describe('Given a Principal component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    jest.spyOn(actions, 'loadPopularMovies').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadPopularShows').mockReturnValue({ type: '' })
  })

  describe('When is rendered with product "movies" and without movies loaded', () => {
    test('Then should call loadPopularMovies', () => {
      const store = buildStore(initialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Principal product="movies"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      expect(actions.loadPopularMovies).toHaveBeenCalled()
    })
  })

  describe('When is rendered with product "movies" and with 3 movies loaded', () => {
    test('Then should render ItemDetail 3 times', () => {
      const mockedInitialState = {
        moviesReducer: {
          popularMovies: [
            { title: 'one', id: 1 },
            { title: 'two', id: 2 },
            { title: 'three', id: 3 }
          ]
        },
        showsReducer: {}
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Principal product="movies"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      const itemDetailsMocked = document.querySelectorAll('span')

      expect(itemDetailsMocked.length).toBe(3)
    })
  })

  describe('When is rendered with product "shows" and without shows loaded', () => {
    test('Then should call loadPopularShows', () => {
      const store = buildStore(initialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Principal product="shows"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      expect(actions.loadPopularShows).toHaveBeenCalled()
    })
  })

  describe('When is rendered with product "shows" and with 5 shows loaded', () => {
    test('Then should render ItemDetail 5 times', () => {
      const mockedInitialState = {
        moviesReducer: { },
        showsReducer: {
          popularShows: [
            { name: 'one', id: 1 },
            { name: 'two', id: 2 },
            { name: 'three', id: 3 },
            { name: 'four', id: 4 },
            { name: 'five', id: 5 }
          ]
        }
      }
      const store = buildStore(mockedInitialState)

      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Principal product="shows"/>
            </BrowserRouter>
          </Provider>,
          { container }
        )
      })

      const itemDetailsMocked = document.querySelectorAll('span')

      expect(itemDetailsMocked.length).toBe(5)
    })
  })
})
