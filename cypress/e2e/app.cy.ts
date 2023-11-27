describe('Navigation', () => {
  it('should navigate to login page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "login" and click it
    cy.get('a[href*="/login"]').click()

    // The new url should include "/login"
    cy.url().should('include', '/login')

    // The new page should contain an h1 with "Login"
    cy.get('h1').contains('Login')
  })
})
