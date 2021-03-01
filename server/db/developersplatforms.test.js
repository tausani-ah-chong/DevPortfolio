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

const devId = 2
const platformIds = [
  { platformId: 2 },
  { platformId: 3 }
]

describe('inserts new developer platform pair into joins table', () => {
  it('takes in a dev id and platform id and returns a new devPlat id', () => {
    return devPlat.insertNewDevPlat(devId, platformIds, testDb)
      .then(devPlatId => {
        expect(devPlatId).toHaveLength(1)
        return null
      })
  })
})
