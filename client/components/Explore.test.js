import React from 'react'
import Explore from './Explore'
import { render, screen } from '@testing-library/react'

describe('explore componnt', () => {
  describe('when the component is loaded, it will display h1 text', () => {
    it('shows the text "Explore page"', () => {
      expect.assertions(2)
      render(<Explore />)
      const text = screen.getByRole('heading', { level: 1 })
      expect(text.innerHTML).toBe('Explore Page!')
      expect(text.innerHTML).toMatch('Page!')
    })
  })
})
