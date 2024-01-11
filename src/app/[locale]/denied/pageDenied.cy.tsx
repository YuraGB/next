import React from 'react'
import Denied from './page'

describe('<Denied />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Denied />)
  })
})