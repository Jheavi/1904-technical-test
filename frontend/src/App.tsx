import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/configureStore'
import initialState from './redux/initialState'
import Header from './components/Header/Header'
import Principal from './views/Principal/Principal'
require('dotenv').config()

const store = configureStore(initialState)

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Principal />
      </BrowserRouter>
    </Provider>
  )
}

export default App
