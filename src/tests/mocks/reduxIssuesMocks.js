import faker from 'faker'

import { initialState, strategyReducer } from '../../redux/store/issues'

export function mocksOfRequest(type, hasError = false, isLoading = false, errorMessage = '') {
  const { functionToTest, MOCKED_ACTION } = commonMocks(type)

  const EXPECTED_RETURN = {
    ...initialState,
    ...MOCKED_ACTION.payload,
    hasError,
    isLoading,
    errorMessage
  }

  return {
    functionToTest,
    MOCKED_ACTION,
    EXPECTED_RETURN
  }
}

export function mockSuccess(type) {
  const { functionToTest, MOCKED_ACTION } = commonMocks(type)

  return {
    functionToTest,
    MOCKED_ACTION
  }
}

function commonMocks(type) {
  const functionToTest = strategyReducer[type]

  const MOCKED_ACTION = {
    payload: faker.random.objectElement()
  }
  return {
    functionToTest,
    MOCKED_ACTION
  }
}
