import { all, takeLatest } from 'redux-saga/effects'

import { issuesTypes, retrieveIssuesSagas } from '../redux/issues'

export function * rootSaga() {
  return yield all([takeLatest(issuesTypes.RETRIEVE_ISSUES_REQUEST, retrieveIssuesSagas)])
}
