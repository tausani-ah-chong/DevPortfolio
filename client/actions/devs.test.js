import { setDevs, SET_DEVS } from './devs'

describe('setDevs', () => {
  it('returns the correct action', () => {
    const dev = [
      {
        id: 1,
        first_name: 'sarah',
        pronoun: 'her/she'
      }
    ]
    const action = setDevs(dev)
    expect(action.type).toBe(SET_DEVS)
    expect(action.devs[0].id).toBe(1)
    expect(action.devs).toHaveLength(1)
  })
})
