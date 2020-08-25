import { defaultState } from '../../defaultState'
import { strategyReducer } from './strategyReducer'

export { strategyReducer }
export * from './selectors'
export * from './issuesTypes'
export * from './issuesActions'

export const initialState = {
  ...defaultState,
  issues: []
}

export function issuesReducer(state = initialState, action) {
  return strategyReducer[action.type] ? strategyReducer[action.type](state, action) : state
}
