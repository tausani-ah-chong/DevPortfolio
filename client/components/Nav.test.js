import React from 'react'
import Nav from './Nav'
import { render, screen } from '@testing-library/react'

describe('check if nav compentent displays', () => {
  it('shows the text "Nav component"', () => {
    expect.assertions(2)
    render(<Nav />)
    const element = screen.getByText('Sign In')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Sign In')
  })
})
