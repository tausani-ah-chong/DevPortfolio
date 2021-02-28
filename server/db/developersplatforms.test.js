const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const devPlat = require('./developersplatforms')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

const devPlatform = {
  developerId: 3,
  platformId: 1
}

describe('inserts new developer platform pair into joins table', () => {
  it('takes in a dev id and platform id and returns a new devPlat id', () => {
    return devPlat.insertNewDevPlat(devPlatform, testDb)
      .then(devPlatId => {
        expect(devPlatId).toBe(5)
        return null
      })
  })
})
