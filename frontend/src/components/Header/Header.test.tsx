import React from 'react'
import { act, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Given a Header component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  describe('When is rendered', () => {
    test('Then the title "TV Shows and Movies" should be rendered', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>,
          { container })
      })

      const title = document.querySelector('h1')

      expect(title?.innerHTML).toBe('TV Shows and Movies')
    })
  })
})
