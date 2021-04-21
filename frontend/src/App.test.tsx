import React from 'react'
import { act, render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import * as actions from './redux/actions/actions'
import '@testing-library/jest-dom/extend-expect'

jest.mock('./redux/actions/actions')

describe('Given a App component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    jest.spyOn(actions, 'loadPopularMovies').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadPopularShows').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadMovieDetail').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadSimilarMovies').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadShowDetail').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'loadSimilarShows').mockReturnValue({ type: '' })
  })

  describe('When is rendered by default', () => {
    test('Theh should be a tag with the class "product-list"', () => {
      act(() => {
        render(
          <MemoryRouter>
            <App />
          </MemoryRouter>,
          { container }
        )
      })

      const tag = document.querySelector('.product-list')

      expect(tag).toBeInTheDocument()
    })
  })
})
