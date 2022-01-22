import { render } from '@redwoodjs/testing/web'

import ResultCard from './ResultCard'

describe('ResultCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResultCard />)
    }).not.toThrow()
  })
})
