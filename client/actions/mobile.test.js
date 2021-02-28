import { setMobile, SET_MOBILE } from './mobile'

describe('setMobile', () => {
  it('returns the correct action', () => {
    const devs = {
      platforms: [
        { platformName: 'Web Development' },
        { platformName: 'Mobile Development' }
      ]
    }
    const action = setMobile(devs)
    expect(action.type).toBe(SET_MOBILE)
    expect(devs.platforms).toHaveLength(2)
  })
})
