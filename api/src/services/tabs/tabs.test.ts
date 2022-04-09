import { tabs } from './tabs'
import type { StandardScenario } from './tabs.scenarios'

describe('tabs', () => {
  scenario('returns all tabs', async (scenario: StandardScenario) => {
    mockCurrentUser({
      roles: ['user'],
      id: 1,
      email: 'testuser@nother.email',
    })
    const result = await tabs()

    expect(result.length).toEqual(Object.keys(scenario.tab).length)
  })
})
