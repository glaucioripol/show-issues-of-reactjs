import nock from 'nock'

import { retrieveIssues } from '.'

import mockResponse from '../../tests/mocks/issuesApiResponse.json'

describe('test my request', () => {
  beforeAll(() => {
    nock.cleanAll()
  })
  beforeEach(() => {
    nock.cleanAll()
  })

  it('Success request', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/repos/facebook/react/issues?per_page=10')
      .reply(200, mockResponse)

    const response = await retrieveIssues()

    expect(await response.json()).toEqual(mockResponse)
  })

  it('failure request', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/repos/facebook/react/issues?per_page=10')
      .reply(404)

    const hasFailure = (await retrieveIssues()).ok
    expect(hasFailure).toBeFalsy()
  })
})
