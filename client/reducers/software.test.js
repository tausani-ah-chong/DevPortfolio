import { SET_SOFTWARE } from '../actions/software'
import softwareReducer from './software'

describe('Software reducer', () => {
  it('Returns new devs array on "SET_SOFTWARE"', () => {
    const oldSoftware = [
      {
        name: 'Sophie',
        platforms: [
          { platformName: 'Software' },
          { platformName: 'Web Development' }
        ]
      }
    ]
    const action = {
      type: SET_SOFTWARE,
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
    const newState = softwareReducer(oldSoftware, action)
    expect(newState[0].name).toMatch('Ello')
    expect(newState).not.toBe(oldSoftware)
  })

  it('returns oldState if reducer called with unknown action type', () => {
    const oldSoftware = [
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
    const newState = softwareReducer(oldSoftware, action)
    expect(newState).toBe(oldSoftware)
    expect(newState[0].devs[0].name).toMatch('Ello')
  })
})
