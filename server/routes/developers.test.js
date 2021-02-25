const request = require('supertest')

const server = require('../server')
const db = require('../db/developers')

jest.mock('../db/developers')

const mockDevelopers = [{
  id: 1,
  first_name: 'test 1',
  last_name: 'last name'
}, {
  id: 2,
  first_name: 'test 2',
  last_name: 'lastish name'
}, {
  id: 3,
  first_name: 'test 3',
  last_name: 'dang last name'
}
]

describe('GET /api/v1/dev', () => {
  it('responds with list of developers', () => {
    db.getDevelopers.mockImplementation(() => Promise.resolve(mockDevelopers))
    return request(server)
      .get('/api/v1/dev')
      .expect(200)
      .then((devs) => {
        expect(devs.body).toHaveLength(3)
        return null
      })
  })
})
