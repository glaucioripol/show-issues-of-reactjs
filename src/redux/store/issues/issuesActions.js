import { issuesTypes } from './issuesTypes'

export const issuesActions = {
  request: (per_page = 10) => ({
    type: issuesTypes.RETRIEVE_ISSUES_REQUEST,
    payload: { per_page }
  }),

  requestWithParams: (params = { per_page: 10 }) => ({
    type: issuesTypes.RETRIEVE_ISSUES_REQUEST_WITH_FILTER,
    payload: params
  }),

  success: (payload) => ({
    type: issuesTypes.RETRIEVE_ISSUES_SUCCESS,
    payload
  }),

  failure: (errorMessage) => ({
    type: issuesTypes.RETRIEVE_ISSUES_FAILURE,
    payload: errorMessage
  })
}
