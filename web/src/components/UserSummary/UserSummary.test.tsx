import { render } from '@redwoodjs/testing/web'

import UserSummary from './UserSummary'

describe('UserSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSummary />)
    }).not.toThrow()
  })
})
