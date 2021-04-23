import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'

const baseProps = {
  data: { id: 'Some test id' },
}

describe('Card', () => {
  describe('When the button is rendered', () => {
    it('should render the card correctly', () => {
      const utils = render(<Card {...baseProps} />)
      const card = utils.getByLabelText(/Card/i)
      expect(card).toBeInTheDocument()
    })
  })
})
