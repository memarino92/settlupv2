import { expenseLists } from './expenseLists'
import type { StandardScenario } from './expenseLists.scenarios'

describe('expenseLists', () => {
  scenario('returns all expenseLists', async (scenario: StandardScenario) => {
    const result = await expenseLists({ tabId: scenario.expenseList.one.tab.id })

    expect(result.length).toEqual(Object.keys(scenario.expenseList).length)
  })
})
