import React from 'react'
import { renderWithRedux } from '../test-utils'
import Profile from './Profile'
import { screen } from '@testing-library/react'

jest.mock('./profileHelper')

describe('Profile', () => {
  it('Show Dev information', () => {
    const devs = [
      {
        id: 1,
        firstName: 'Tausani',
        bio: 'I like writing tests',
        pronoun: 'he/him',
        languages: [{ languageId: 1, languageName: 'C#' }],
        projects: [{ projectId: 1, name: 'Cool project' }]
      }
    ]
    renderWithRedux(<Profile />, { initialState: { devs } })
    const name = screen.getByText('Tausani')
    const bio = screen.getByText('I like writing tests')
    expect(bio).toHaveTextContent('like')
    expect(name).toHaveTextContent('sani')
  })
})
