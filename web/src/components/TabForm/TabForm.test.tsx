import { render } from '@redwoodjs/testing/web'

import TabForm from './TabForm'

describe('TabForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabForm />)
    }).not.toThrow()
  })
})
