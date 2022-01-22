import { render } from '@redwoodjs/testing/web'

import ListCard from './ListCard'

describe('ListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListCard />)
    }).not.toThrow()
  })
})
