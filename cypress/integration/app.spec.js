describe('SettlUp', () => {

  it('should render the login page', () => {
    cy.visit('http://localhost:8910')
    cy.get('header').should('contain', 'Login')
  })
})
