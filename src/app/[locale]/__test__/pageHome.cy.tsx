import React from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import Home from "../page";

describe("<Home />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />); //ARRANGE

    //ACT
    cy.get("h1").contains("Home");
  });
});
