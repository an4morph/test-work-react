import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import SettingsPage from './components/pages/SettingsPage'


const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/settings" component={SettingsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
