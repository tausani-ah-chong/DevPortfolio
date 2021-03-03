import React from 'react'
import { renderWithRedux } from '../test-utils'
import DevCard from './DevCard'

describe('DevCard', () => {
  it('Dev is passed into DevCard', () => {
    const dev = {
      id: 1,
      name: 'Tausani',
      projects: [{ id: 1, name: 'cool project' }]
    }
    renderWithRedux(<DevCard dev={dev}/>)
    expect(dev.name).toMatch('Tau')
    expect(dev.projects).toHaveLength(1)
  })
})
