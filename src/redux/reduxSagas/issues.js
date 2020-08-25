import { call, put } from 'redux-saga/effects'

import { issuesActions } from '../store/issues'

import { retrieveIssues } from '../../services/api'

export function * retrieveIssuesSaga() {
  try {
    const response = yield call(retrieveIssues)
    const payload = yield response.json()

    const updateData = payload.map((content) => ({
      content: {
        ...content,
        labels: content.labels.length
      },
      isPositive: content.state === 'open',
      isNegative: content.state === 'closed'
    }))

    yield put(issuesActions.success(updateData))
  } catch (err) {
    yield put(issuesActions.failure(err.message))
  }
}
