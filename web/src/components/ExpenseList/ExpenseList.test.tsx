import { render } from '@redwoodjs/testing/web'

import ExpenseList from './ExpenseList'

describe('ExpenseList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpenseList />)
    }).not.toThrow()
  })
})
