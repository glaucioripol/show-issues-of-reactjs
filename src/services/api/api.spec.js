import nock from 'nock'

import { retrieveIssues } from '.'

import mockResponse from '../../tests/mocks/issuesApiResponse.json'

describe('test my request', () => {
  beforeAll(async() => {
    nock.cleanAll()
  })
  beforeEach(async() => {
    nock.cleanAll()
  })

  it('test nock', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/repos/facebook/react/issues?per_page=10')
      .reply(200, mockResponse)

    expect(await retrieveIssues()).toEqual(mockResponse)
  })
})
