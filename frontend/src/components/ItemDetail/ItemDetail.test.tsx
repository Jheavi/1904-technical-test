import React from 'react'
import { act, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ItemDetail from './ItemDetail'

describe('Given a ItemDetail component', () => {
  let container: HTMLElement
  let fakeMovie: { title: string }
  let fakeShow: { name: string }

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    fakeMovie = { title: 'fakeTitle' }
    fakeShow = { name: 'fakeShow' }
  })

  describe('When is rendered with a item with title', () => {
    test('Then should render the title in h3 tag', () => {
      act(() => {
        render(
          <BrowserRouter>
            <ItemDetail item={fakeMovie}/>
          </BrowserRouter>,
          { container }
        )
      })

      const title = document.querySelector('h3')

      expect(title?.innerHTML).toBe('fakeTitle')
    })
  })

  describe('When is rendered with a item without title and with name', () => {
    test('Then should render the name in h3 tag', () => {
      act(() => {
        render(
          <BrowserRouter>
            <ItemDetail item={fakeShow}/>
          </BrowserRouter>,
          { container }
        )
      })

      const title = document.querySelector('h3')

      expect(title?.innerHTML).toBe('fakeShow')
    })
  })
})
