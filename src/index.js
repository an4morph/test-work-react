import React from 'react'
import { render } from 'react-dom'
import 'bootstrap-scss'

import store from './store/config'
import App from './App'
import './base.scss'


render(
  <App store={store} />,
  document.getElementById('root')
)
