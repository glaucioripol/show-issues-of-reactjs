import {
  all
  // , takeLatest
} from 'redux-saga/effects'

// import { issuesTypes } from '../store'
// import { loginSaga } from './loginSaga'

export function * rootSaga() {
  return yield all([
    // takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga)
  ])
}
