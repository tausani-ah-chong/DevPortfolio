import { SET_MOBILE } from '../actions/mobile'
import mobileReducer from './mobile'

describe('Mobile reducer', () => {
  it('Returns new devs array on "SET_MOBILE"', () => {
    const oldPlatforms = [
      {
        name: 'Sophie',
        platforms: [
          { platformName: 'Software' },
          { platformName: 'Web Development' }
        ]
      }
    ]
    const action = {
      type: SET_MOBILE,
      devs: [
        {
          name: 'Ello',
          platforms: [
            { platformName: 'Web Development' },
            { platformName: 'Mobile Development' }
          ]
        }
      ]
    }
    const newState = mobileReducer(oldPlatforms, action)
    expect(newState[0].name).toMatch('Ello')
    expect(newState).not.toBe(oldPlatforms)
  })

  it('returns oldState if reducer called with unknown action type', () => {
    const oldPlatforms = [
      {
        devs: [
          {
            name: 'Ello',
            platforms: [
              { platformName: 'Web Development' },
              { platformName: 'Mobile Development' }
            ]
          }
        ]
      }
    ]
    const action = {
      type: 'UNKNOWN_ACTION'
    }
    const newState = mobileReducer(oldPlatforms, action)
    expect(newState).toBe(oldPlatforms)
    expect(newState[0].devs[0].name).toMatch('Ello')
  })
})
