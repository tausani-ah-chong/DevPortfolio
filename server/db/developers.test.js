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

// getDevelopers for use in test environment
// not wanting to create dependencies on get and delete functions
// function getDevelopers () {
//   return testDb('developers').select()
// }

describe('Getting developers', () => {
  it('getDevelopers returns all developers', () => {
    return dev.getDevelopers(testDb)
      .then(devs => {
        expect(devs).toHaveLength(3)
        expect(devs[0].id).toBe(1)
        expect(devs[0].first_name).toMatch('multi')
        return null
      })
  })
})
