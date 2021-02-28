import { setSoftware, SET_SOFTWARE } from './software'

describe('setMobile', () => {
  it('returns the correct action', () => {
    const devs = {
      platforms: [
        { platformName: 'Software Development' },
        { platformName: 'Mobile Development' }
      ]
    }
    const action = setSoftware(devs)
    expect(action.type).toBe(SET_SOFTWARE)
    expect(devs.platforms).toHaveLength(2)
  })
})
