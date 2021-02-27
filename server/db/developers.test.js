const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const dev = require('./developers')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Join developers, projects, platforms and languages', () => {
  it('Will return developer and all list data', () => {
    return dev.getDevelopers(testDb)
      .then(devs => {
        expect(devs).toHaveLength(3)
        expect(devs[0].firstName).toMatch('multi')
        expect(devs[0].projects[1].projectId).toBe(2)
        expect(devs[0].languages).toHaveLength(2)
        expect(devs[0].languages[0].languageName).toMatch('JS')
        return null
      })
  })
})
