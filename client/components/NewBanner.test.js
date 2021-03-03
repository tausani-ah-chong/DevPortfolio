import React from 'react'
import Banner from './Banner'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../test-utils'
import { useAuth } from '../contexts/AuthContext'

jest.mock('../contexts/AuthContext')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('NewBanner Component', () => {
  it('shows the text "Find your next dev"', () => {
    const currentUser = null
    useAuth.mockImplementation(() => {
      return {
        currentUser
      }
    })
    expect.assertions(2)
    renderWithRouter(<Banner />)
    const element = screen.getByText('Find your next dev')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Find')
  })

  it('shows "sign up" button if user is not signed in', () => {
    const currentUser = null
    useAuth.mockImplementation(() => {
      return {
        currentUser
      }
    })
    renderWithRouter(<Banner />)
    const element = screen.getByRole('button')
    expect(element).toHaveTextContent('Sign')
  })
})
