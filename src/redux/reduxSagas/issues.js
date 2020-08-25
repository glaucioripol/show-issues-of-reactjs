import {
  // call,
  put
} from 'redux-saga/effects'

import { issuesActions } from '../store/issues'

// import { retrieveIssues } from '../../services/api'

import mockedData from '../../tests/mocks/issuesApiResponse.json'

export function * retrieveIssuesSaga() {
  try {
    // const response = yield call(retrieveIssues)
    // const payload = yield response.json()
    // const updatedData = payload.map(formatContentToTable)
    const updatedData = mockedData.map(formatContentToTable)
    yield put(issuesActions.success(updatedData))
  } catch (err) {
    yield put(issuesActions.failure(err.message))
  }
}

export function * retrieveIssuesWithFiltersSaga({ payload }) {
  try {
    // const response = yield call(retrieveIssues)
    // const payloadResponse = yield response.json()
    // const updatedData = payload.map(formatContentToTable)
    // const queryString = new URLSearchParams(payload).toString()
    const updatedData = mockedData.map(formatContentToTable)
    yield put(issuesActions.success(updatedData))
  } catch (err) {
    yield put(issuesActions.failure(err.message))
  }
}

function formatContentToTable(content) {
  return {
    content: {
      ...content,
      labels: content.labels.length
    },
    isPositive: content.state === 'open',
    isNegative: content.state === 'closed'
  }
}
