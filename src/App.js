import React from 'react'
import { Provider } from 'react-redux'

import { makeStore } from './redux'

import { Home } from './pages'

export const App = () => (
  <Provider store={makeStore()}>
    <Home />
  </Provider>
)
