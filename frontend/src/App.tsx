import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import configureStore from './redux/configureStore'
import initialState from './redux/initialState'
import Header from './components/Header/Header'
import Principal from './views/Principal/Principal'
import Detail from './views/Detail/Detail'
import ErrorPage from './views/ErrorPage/ErrorPage'
require('dotenv').config()

const store = configureStore(initialState)

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
        <Switch>
          <Route path="/movies/:id" component={() => <Detail product="movies"/>}/>
          <Route path="/shows/:id" component={() => <Detail product="shows"/>}/>
          <Route path="/movies" component={() => <Principal product="movies"/>}/>
          <Route path="/shows" component={() => <Principal product="shows"/>}/>
          <Route path="/error" component={ErrorPage}/>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
