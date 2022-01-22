import { render } from '@redwoodjs/testing/web'

import Expense from './Expense'

describe('Expense', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Expense />)
    }).not.toThrow()
  })
})
