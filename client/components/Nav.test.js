import React from 'react'
import Nav from './Nav'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../test-utils'
import { useAuth } from '../contexts/AuthContext'

jest.mock('../contexts/AuthContext')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('check if nav compentent displays', () => {
  it('shows "Log out" button if user is signed in', () => {
    const currentUser = {
      name: 'DA UCE'
    }
    useAuth.mockImplementation(() => {
      return {
        currentUser
      }
    })
    expect.assertions(3)
    renderWithRouter(<Nav />)
    const text = screen.getByText('Log Out')
    const button = screen.getByRole('button')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('Log')
    expect(button.innerHTML).toBe('Log Out')
  })
})
