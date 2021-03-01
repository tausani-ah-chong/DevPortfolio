const request = require('supertest')

const server = require('../server')
const db = require('../db/developersplatforms')

jest.mock('../db/developersplatforms')

describe('POST /api/v1/devPlat', () => {
  it('responds with a devevloperPlatform id', () => {
    db.insertNewDevPlat.mockImplementation(() => Promise.resolve(5))
    return request(server)
      .post('/api/v1/devPlat/2')
      .send({ developerId: 2, platformId: 2 })
      .expect(201)
      .then(res => {
        expect(res.body).toBe(5)
        return null
      })
  })
})
