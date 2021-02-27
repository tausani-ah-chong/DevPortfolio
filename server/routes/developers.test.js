const request = require('supertest')

const server = require('../server')
const db = require('../db/developers')

jest.mock('../db/developers')

const mockDevelopers = [{
  id: 1,
  firstName: 'test 1',
  lastName: 'last name'
}, {
  id: 2,
  firstName: 'test 2',
  lastName: 'lastish name'
}, {
  id: 3,
  firstName: 'test 3',
  lastName: 'dang last name'
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

describe('GET /api/v1/dev/:id', () => {
  it('responds with a developer', () => {
    db.getDeveloperById.mockImplementation((id) => {
      expect(id).toBe(2)
      return Promise.resolve(mockDevelopers[1])
    })
    return request(server)
      .get('/api/v1/dev/2')
      .expect(200)
      .then((dev) => {
        expect(dev.body.lastName).toMatch('lastish')
        return null
      })
  })
})
