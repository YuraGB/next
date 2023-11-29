import React from 'react'
import Home from '../page'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />) //ARRANGE

    //ACT
    cy.get('h1').contains('Home')
  })
})
