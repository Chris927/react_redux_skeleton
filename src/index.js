import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import * as actions from './actions'
import AppTemplate from './components/AppTemplate'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store= {store}>
    <Router history={history}>
      <Route path='/' component={AppTemplate}>
        <IndexRoute component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
