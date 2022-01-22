import { render } from '@redwoodjs/testing/web'

import Tab from './Tab'

describe('Tab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tab />)
    }).not.toThrow()
  })
})
