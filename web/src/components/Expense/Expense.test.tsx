import { render } from '@redwoodjs/testing/web'

import Expense from './Expense'

const expense = {
  id: '2',
  name: 'Expense 2',
  amount: '200',
}

describe('Expense', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <table>
          <tbody>
          <Expense index={1} expense={expense} />
          </tbody>
        </table>
      )
    }).not.toThrow()
  })
})
