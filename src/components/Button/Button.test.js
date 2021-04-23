import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('Button', () => {
  describe('When the button is rendered', () => {
    it('should render the Button correctly', () => {
      const utils = render(<Button />)
      const Button = utils.getByLabelText(/Button/i)
      expect(Button).toBeInTheDocument()
    })
  })
})
