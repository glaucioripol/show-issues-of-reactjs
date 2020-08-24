import { defaultState } from '../../defaultState'
import { strategyReducer } from './strategyReducer'

export * from './selectors'
export * from './issuesTypes'

const initialState = {
  ...defaultState,
  issues: []
}

export function issuesReducer(state = initialState, action) {
  return strategyReducer[action.type] ? strategyReducer[action.type](state, action) : state
}
