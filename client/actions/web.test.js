import { setWeb, SET_WEB } from './web'

describe('setMobile', () => {
  it('returns the correct action', () => {
    const devs = {
      platforms: [
        { platformName: 'Web Development' },
        { platformName: 'Mobile Development' }
      ]
    }
    const action = setWeb(devs)
    expect(action.type).toBe(SET_WEB)
    expect(devs.platforms).toHaveLength(2)
  })
})
