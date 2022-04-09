import { render } from '@redwoodjs/testing/web'

import UserSummary from './UserSummary'

const user = {
  id: 1,
  name: 'User 1',
  email: 'testuser@nother.email'
}

describe('UserSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSummary user={user} />)
    }).not.toThrow()
  })
})
