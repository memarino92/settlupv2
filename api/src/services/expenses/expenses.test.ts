import { expenses } from './expenses'
import type { StandardScenario } from './expenses.scenarios'

describe('expenses', () => {
  scenario('returns all expenses', async (scenario: StandardScenario) => {
    mockCurrentUser({
      roles: ['user'],
      id: 1,
      email: 'testuser@nother.email',
    })
    const result = await expenses({ expenseListId: scenario.expense.one.expenseListId })

    expect(result.length).toEqual(Object.keys(scenario.expense).length)
  })
})
