import { issuesTypes } from './types'

export const reducerStrategy = {
  [issuesTypes.RETRIEVE_ISSUES_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    isLoading: true,
    hasError: false,
    errorMessage: ''
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
