import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

const onClickSpy = jest.fn()

const baseProps = {
  onClick: onClickSpy,
  // type: 'default'
}

describe('Button', () => {
  describe('When the button is rendered', () => {
    let utils
    let button

    beforeEach(() => {
      utils = render(<Button {...baseProps}>Some label</Button>)
      button = utils.getByText(/Some label/i)
    })

    test('It should render the Button correctly', () => {
      expect(button).toBeInTheDocument()
    })

    describe('And the button is clicked', () => {
      it('should call the onClick method', () => {
        fireEvent.click(button)

        expect(onClickSpy).toHaveBeenCalled()
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })

    // describe('And a type is provided', () => {
    //   it('should render the correct type', () => {
    //     const utils = render(<Button {...baseProps}>Some label</Button>)
    //     const Button = utils.getByText(/Some label/i)
    //     expect(onClickSpy).toHaveBeenCalled()
    //   })
    // })
  })
})
