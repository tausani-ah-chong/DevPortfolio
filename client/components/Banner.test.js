import React from 'react'
import Banner from './Banner'
import { render, screen } from '@testing-library/react'

describe('Footer Component', () => {
  it('shows the text footer', () => {
    render(<Banner />)
    const element = screen.getByText('Find your next dev')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Find')
  })
})
