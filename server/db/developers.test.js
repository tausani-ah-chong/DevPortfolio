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

describe('Join developers and Projects', () => {
  it('Will return developer and project data together', () => {
    return dev.getDevelopers(testDb)
      .then(devs => {
        console.log(dev)
        // expect(devs.projects).toHaveLength(2)
        // expect(dev.firstName).toMatch('multi')
        // expect(dev.projects[1].projectId).toBe(2)
        // expect(dev.languages).toHaveLength(2)
        // expect(dev.languages[0].languageName).toMatch('JS')
        return null
      })
  })
})
