import { render } from '@redwoodjs/testing/web'

import ListCard from './ListCard'

let expenseList = {
  expenses: [
    {
      id: '1',
      name: 'Expense 1',
      amount: '100',
    }
  ]
}

describe('ListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListCard expenseList={expenseList} total={20} />)
    }).not.toThrow()
  })
})
