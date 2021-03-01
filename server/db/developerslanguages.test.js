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

const devId = 2
const languageIds = [
  { languageId: 2 },
  { languageId: 3 }
]

describe('inserts data of new user with a language', () => {
  it('takes in a user id and language id and returns id', () => {
    return devLang.insertDeveloperLanguage(devId, languageIds, testDb)
      .then(devLangId => {
        expect(devLangId).toHaveLength(1)
        expect(devLangId[0]).toBe(8)
        return null
      })
  })
})
