import React from 'react'
import { dispatch } from '../store'
import { setDevs } from '../actions/devs'
import consume from '../consume'
import { renderWithRedux } from '../test-utils'
import Explore from './Explore'

jest.mock('../store')
jest.mock('../consume')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('setDevs', () => {
  describe('-> GET /dev api call success', () => {
    it('dispatches with the correct dev action', () => {
      consume.mockImplementation(() => {
        return Promise.resolve(dispatch(setDevs()))
      })
      return consume()
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({ type: 'SET_DEVS' })
          return null
        })
    })

    it('show dev name', () => {
      consume.mockImplementation(() => {
        return Promise.resolve({
          body: [{
            name: 'multi',
            address: '111 One Lane'
          }, {
            name: 'anna',
            address: '222 Two Lane'
          }]
        })
      })
      return consume()
        .then((res) => {
          expect(res.body[0].name).toBe('multi')
          return null
        })
    })
  })
})

describe('explore component', () => {
  it('shows all users', () => {
    consume.mockImplementation(() => {
      return Promise.resolve({
        body: [{
          name: 'jono',
          address: '111 One Lane'
        }, {
          name: 'anna',
          address: '222 Two Lane'
        }]
      })
    })
    renderWithRedux(<Explore />)
    return consume()
      .then((res) => {
        const element = res.body
        expect(element[0].name).toMatch('jono')
        expect(element).toHaveLength(2)
        return null
      })
  })
})
