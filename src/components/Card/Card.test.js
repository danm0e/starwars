import { render } from '@testing-library/react'
import Card from './Card'

const baseProps = {
	data: { id: 'Some test id' },
}

const test = "this is a test";

describe('Card', () => {
	describe('When the button is rendered', () => {
		test('It should render the card correctly', () => {
			const utils = render(<Card {...baseProps} />)
			const card = utils.getByLabelText(/Card/i)
			expect(card).toBeInTheDocument()
		})
	})
})
