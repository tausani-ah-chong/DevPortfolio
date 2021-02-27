import React from 'react'
import Footer from './Footer'
import { render, screen } from '@testing-library/react'

describe('Footer Component', () => {
  it('shows the text footer', () => {
    render(<Footer />)
    const element = screen.getByText('Footer!')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Foot')
  })
})
