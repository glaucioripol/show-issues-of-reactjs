import { issuesState } from '.'
import faker from 'faker'

describe('issues Selectors', () => {
  describe('full state', () => {
    it('return should be equal property "issuesReducer"', () => {
      const MOCK_STATE = {
        issuesReducer: faker.random.objectElement()
      }
      const EXPECTED_DATA = issuesState(MOCK_STATE)

      expect(EXPECTED_DATA).toEqual(MOCK_STATE.issuesReducer)
    })
  })
})
