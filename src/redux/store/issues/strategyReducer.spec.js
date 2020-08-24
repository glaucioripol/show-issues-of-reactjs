import faker from 'faker'

import { initialState, issuesTypes } from '.'

import { mocksOfRequest, mockSuccess } from '../../../tests/mocks/reduxIssuesMocks'

describe('strategyReducer', () => {
  describe('Requests', () => {
    it('issuesTypes.RETRIEVE_ISSUES_REQUEST', () => {
      const {
        functionToTest,
        MOCKED_ACTION,
        EXPECTED_RETURN
      } = mocksOfRequest(issuesTypes.RETRIEVE_ISSUES_REQUEST, false, true, '')

      expect(functionToTest(initialState, MOCKED_ACTION)).toEqual(EXPECTED_RETURN)
    })

    it('issuesTypes.RETRIEVE_ISSUES_REQUEST_WITH_FILTER', () => {
      const {
        functionToTest,
        MOCKED_ACTION,
        EXPECTED_RETURN
      } = mocksOfRequest(issuesTypes.RETRIEVE_ISSUES_REQUEST_WITH_FILTER, false, true, '')

      expect(functionToTest(initialState, MOCKED_ACTION)).toEqual(EXPECTED_RETURN)
    })
  })

  it('issuesTypes.RETRIEVE_ISSUES_SUCCESS', () => {
    const { functionToTest, MOCKED_ACTION } = mockSuccess(issuesTypes.RETRIEVE_ISSUES_SUCCESS)

    const EXPECTED_RETURN = {
      ...initialState,
      isLoading: false,
      hasError: false,
      errorMessage: '',
      issues: MOCKED_ACTION.payload
    }

    expect(functionToTest(initialState, MOCKED_ACTION)).toEqual(EXPECTED_RETURN)
  })

  it('issuesTypes.RETRIEVE_ISSUES_FAILURE', () => {
    const { functionToTest } = mockSuccess(issuesTypes.RETRIEVE_ISSUES_FAILURE)

    const errorMessage = faker.random.words()

    const EXPECTED_RETURN = {
      ...initialState,
      isLoading: false,
      hasError: true,
      errorMessage
    }

    expect(functionToTest(initialState, { payload: errorMessage })).toEqual(EXPECTED_RETURN)
  })
})
