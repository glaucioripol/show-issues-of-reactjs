import React from 'react'
import { Provider } from 'react-redux'

import { makeStore } from './redux'

export const App = () => {
  const store = makeStore()

  return (
    <Provider store={store}>
      <section>
        <h1>cleaned</h1>
      </section>
    </Provider>
  )
}
