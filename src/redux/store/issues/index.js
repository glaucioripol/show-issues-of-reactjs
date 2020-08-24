import { defaultState } from '../../defaultState'
import { strategyReducer } from './strategyReducer'

export * from './selectors'
export * from './issuesTypes'

const initialState = {
  ...defaultState,
  issues: [{
    content: {
      number: 19678,
      title: 'Bug: React 16 no longer supports triggering form input change/input events programmatically',
      created_at: '2020-08-23T21:27:55Z',
      updated_at: '2020-08-23T21:38:38Z',
      labels: [
        {
          id: 155984160,
          node_id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
          url: 'https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed',
          name: 'Status: Unconfirmed',
          color: 'd4c5f9',
          default: false,
          description: "A potential issue that we haven't yet confirmed as a bug"
        }
      ],
      state: 'open'
    },
    isPositive: true
  }]
}

export function issuesReducer(state = initialState, action) {
  return strategyReducer[action.type] ? strategyReducer[action.type](state, action) : state
}
