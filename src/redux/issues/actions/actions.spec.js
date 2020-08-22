import { issuesActions } from '.'

import { issuesTypes } from '..'

import faker from 'faker'

const getMock = () => {
  const MOCKED_PAYLOAD = faker.random.objectElement()
  return MOCKED_PAYLOAD
}

describe('check return of issues actions', () => {
  it('should be type and payload expected return of request action', () => {
    const MOCKED_PAYLOAD = getMock()
    const EXPECTED_DATA = issuesActions.request(MOCKED_PAYLOAD)

    expect(EXPECTED_DATA).toEqual({
      type: issuesTypes.RETRIEVE_ISSUES_REQUEST,
      payload: MOCKED_PAYLOAD
    })
  })

  it('should be type and payload expected return of success', () => {
    const MOCKED_PAYLOAD = getMock()
    const EXPECTED_DATA = issuesActions.success(MOCKED_PAYLOAD)

    expect(EXPECTED_DATA).toEqual({
      type: issuesTypes.RETRIEVE_ISSUES_SUCCESS,
      payload: MOCKED_PAYLOAD
    })
  })

  it('should be type and payload expected return of failure', () => {
    const MOCKED_PAYLOAD = faker.random.word()
    const EXPECTED_DATA = issuesActions.failure(MOCKED_PAYLOAD)

    expect(EXPECTED_DATA).toEqual({
      type: issuesTypes.RETRIEVE_ISSUES_FAILURE,
      payload: MOCKED_PAYLOAD
    })
  })
})
