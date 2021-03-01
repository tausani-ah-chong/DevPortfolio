import React from 'react'
import Nav from './Nav'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../test-utils'

describe('check if nav compentent displays', () => {
  it('shows the text "Nav component"', () => {
    expect.assertions(2)
    renderWithRouter(<Nav />)
    const element = screen.getByText('Sign Up')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Sign Up')
  })
})
