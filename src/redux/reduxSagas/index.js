import { all, takeLatest } from 'redux-saga/effects'

import { issuesTypes } from '../store/issues'
import { retrieveIssuesSaga } from './issues'

export function * rootSaga() {
  return yield all([
    takeLatest(issuesTypes.RETRIEVE_ISSUES_REQUEST, retrieveIssuesSaga)
  ])
}
