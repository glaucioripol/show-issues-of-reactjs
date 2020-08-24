import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './reduxSagas'

import { issuesReducer } from './store'

export function makeStore() {
  const reducers = combineReducers({
    issuesReducer
  })

  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)

  return store
}
