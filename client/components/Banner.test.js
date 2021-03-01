import React from 'react'
import Banner from './Banner'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../test-utils'

describe('Footer Component', () => {
  it('shows the text footer', () => {
    renderWithRouter(<Banner />)
    const element = screen.getByText('Find your next dev')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Find')
  })
})
