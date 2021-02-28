const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const devLang = require('./developerslanguages')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

const userLangId = {
  developerId: 3,
  languageId: 1
}

describe('inserts data of new user with a language', () => {
  it('takes in a user id and language id and returns id', () => {
    return devLang.insertDeveloperLanguage(userLangId, testDb)
      .then(devLangId => {
        expect(devLangId[0]).toBe(7)
        return null
      })
  })
})
