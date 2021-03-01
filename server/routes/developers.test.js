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

const newDev = {
  firstName: 'christo',
  uuid: 'adfdsfd1234',
  lastName: 'difficult last name',
  profilePicture: 'beautiful face',
  pronoun: 'him/he',
  bio: 'cool bio'
}

describe('GET /api/v1/dev', () => {
  it('responds with list of developers and data', () => {
    db.getDevelopers.mockImplementation(() => Promise.resolve(mockDevelopers))
    return request(server)
      .get('/api/v1/dev')
      .expect(200)
      .then((devs) => {
        expect(devs.body).toHaveLength(3)
        expect(devs.body[0].firstName).toMatch('1')
        return null
      })
  })
})

describe('POST / api/v1/dev/get-started', () => {
  it('responds with new developer id', () => {
    db.insertNewDeveloper.mockImplementation(() => Promise.resolve(4))
    return request(server)
      .post('/api/v1/dev/get-started')
      .send(newDev)
      .expect(201)
      .then(res => {
        expect(res.body).toBe(4)
        return null
      })
  })
})

describe('GET /api/v1/dev/:id', () => {
  it('responds with a developer by uuid', () => {
    db.getDeveloperById.mockImplementation(() => Promise.resolve(newDev))
    return request(server)
      .get('/api/v1/dev/adfdsfd1234')
      .expect(200)
      .then((dev) => {
        expect(dev.body.uuid).toMatch('ad')
        return null
      })
  })
})