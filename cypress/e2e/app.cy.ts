describe('Navigation', () => {
  beforeEach(() => {
    // Mock Firebase before each test
    cy.mockFirebase()
  })
  it('should navigate to login page', () => {
    cy.setCookie('Accept-Language', 'en')

    // Start from the index page
    cy.visit('http://localhost:3000/en')

    // Find a link with an href attribute containing "login" and click it
    cy.get('a[href*="/login"]')
      .should('not.have.css', 'display', 'none')
      .eq(0)
      .click({ force: true }) // -> init of the header make link hidden

    // The new url should include "/login"
    cy.url().should('include', '/login')

    // The new page should contain an h1 with "Login"
    cy.get('h1').contains('Login')

    cy.get('input[name="email"]').type('yuhur1985@gmail.com')
    cy.get('input[name="password"]').type('123')

    cy.get('button[role="button"]').click()

    //redirect to HP
    cy.url().should('include', '/')
  })
})
