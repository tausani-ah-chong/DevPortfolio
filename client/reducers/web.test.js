import { SET_WEB } from '../actions/web'
import webReducer from './web'

describe('Web reducer', () => {
  it('Returns new devs array on "SET_WEB"', () => {
    const oldWeb = [
      {
        name: 'Sophie',
        platforms: [
          { platformName: 'Software' },
          { platformName: 'Web Development' }
        ]
      }
    ]
    const action = {
      type: SET_WEB,
      devs: [
        {
          name: 'Ello',
          platforms: [
            { platformName: 'Web Development' },
            { platformName: 'Software' }
          ]
        }
      ]
    }
    const newState = webReducer(oldWeb, action)
    expect(newState[0].name).toMatch('Ello')
    expect(newState).not.toBe(oldWeb)
  })

  it('returns oldState if reducer called with unknown action type', () => {
    const oldWeb = [
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
    const newState = webReducer(oldWeb, action)
    expect(newState).toBe(oldWeb)
    expect(newState[0].devs[0].name).toMatch('Ello')
  })
})
