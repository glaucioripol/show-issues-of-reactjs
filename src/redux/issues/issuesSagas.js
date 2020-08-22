import { call, put } from 'redux-saga/effects'

import { issuesActions } from '.'

export function * retrieveIssuesSagas() {
  try {
    yield call(Promise.resolve())
    yield put(issuesActions.success(''))
  } catch (err) {
    yield put(issuesActions.failure(err.errorMessage))
  }
}
