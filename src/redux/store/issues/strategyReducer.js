import { issuesTypes } from './issuesTypes'

export const strategyReducer = {
  [issuesTypes.RETRIEVE_ISSUES_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    hasError: false,
    isLoading: true
  }),
  [issuesTypes.RETRIEVE_ISSUES_REQUEST_WITH_FILTER]: (state, action) => ({
    ...state,
    ...action.payload,
    hasError: false,
    isLoading: true
  }),
  [issuesTypes.RETRIEVE_ISSUES_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: '',
    issues: action.payload
  }),
  [issuesTypes.RETRIEVE_ISSUES_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    hasError: true,
    errorMessage: action.payload
  })
}
