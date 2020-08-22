import { reducerStrategy } from '.'

export const initialState = {
  issues: [],
  isLoading: false,
  hasError: false,
  errorMessage: ''
}

export function issuesReducer(state = initialState, action) {
  return reducerStrategy[action.type]
    ? reducerStrategy[action.type](state, action)
    : state
}
