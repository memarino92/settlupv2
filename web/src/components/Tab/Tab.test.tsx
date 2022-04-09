import { render } from '@redwoodjs/testing/web'

import Tab from './Tab'

const tab = {
  id: '1',
  name: 'Tab 1',
  expenseLists: [
    {
      expenses: [
        {
          id: '1',
          name: 'Expense 1',
          amount: '100',
        }
      ]
    },
    {
      expenses: [
        {
          id: '2',
          name: 'Expense 2',
          amount: '200',
        }
      ]
    }
  ]
}

describe('Tab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tab tab={tab} />)
    }).not.toThrow()
  })
})
