import { SET_DEVS } from '../actions/devs'
import devsReducer from './devs'

describe('Devs reducer', () => {
  it('Returns new devs array on "SET_DEVS"', () => {
    const oldDevs = [
      { name: 'multi', bio: 'eda oldboy' },
      { name: 'peter', bio: 'leshgooo' }
    ]
    const action = {
      type: SET_DEVS,
      devs: [
        { name: 'steve', bio: 'im hunrgy' },
        { name: 'anna', bio: 'space saver' }
      ]
    }
    const newState = devsReducer(oldDevs, action)
    expect(newState[1].name).toBe('anna')
    expect(newState).not.toBe(oldDevs)
  })

  it('returns oldState if reducer called with unknown action type', () => {
    const oldDevs = [
      { name: 'multi', bio: 'eda oldboy' },
      { name: 'peter', bio: 'leshgooo' }
    ]
    const action = {
      type: 'UNKNOWN_ACTION'
    }
    const newState = devsReducer(oldDevs, action)
    expect(newState).toBe(oldDevs)
    expect(newState[0].bio).toMatch('eda')
  })
})
