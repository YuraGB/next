import React from 'react'
import Admin from '../page'

describe('<Admin />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Admin />)

    cy.url().should('include', '/admin')

    cy.get('h1').contains('Admin page')
  })
})
