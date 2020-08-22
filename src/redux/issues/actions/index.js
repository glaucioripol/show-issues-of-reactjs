import { issuesTypes } from '..'

export const issuesActions = {
  request: (payload) => ({
    type: issuesTypes.RETRIEVE_ISSUES_REQUEST,
    payload
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
