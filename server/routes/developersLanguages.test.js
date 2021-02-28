const request = require('supertest')

const server = require('../server')
const db = require('../db/developerslanguages')

jest.mock('../db/developerslanguages')

describe('POST /api/v1/devLang', () => {
  it('responds with a devevloperLanguage id', () => {
    db.insertDeveloperLanguage.mockImplementation(() => Promise.resolve(7))
    return request(server)
      .post('/api/v1/devLang/2')
      .send({ developerId: 2, languageId: 2 })
      .expect(201)
      .then(res => {
        expect(res.body).toBe(7)
        return null
      })
  })
})
