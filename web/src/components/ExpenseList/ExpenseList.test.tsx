import { render } from '@redwoodjs/testing/web'

import ExpenseList from './ExpenseList'

let expenseList = {
  expenses: [
    {
      id: '1',
      name: 'Expense 1',
      amount: '100',
    }
  ]
}

describe('ExpenseList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpenseList expenseList={expenseList} />)
    }).not.toThrow()
  })
})
