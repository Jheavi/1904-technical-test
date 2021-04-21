import React from 'react'
import { act, render } from '@testing-library/react'
import ErrorPage from './ErrorPage'
import { BrowserRouter } from 'react-router-dom'

describe('Given a ErrorPage component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  describe('When is rendered', () => {
    test('Theh should be a span tag with the text "There was an error, please click button below"', () => {
      act(() => {
        render(
            <BrowserRouter>
              <ErrorPage />
            </BrowserRouter>,
            { container }
        )
      })

      const spanElement = document.querySelector('span')

      expect(spanElement?.innerHTML).toBe('There was an error, please click button below')
    })
  })
})
