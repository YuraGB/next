const PORT = 3000;
describe("Navigation", () => {
  it("should navigate to login page", () => {
    // Start from the index page
    cy.visit(`http://localhost:${PORT}`, {
      onBeforeLoad(win) {
        // DOES NOT WORK
        // Uncaught TypeError: Cannot assign to read only property
        // 'language' of object '[object Navigator]'
        // win.navigator.language = 'Klingon'

        // instead we need to define a property like this
        Object.defineProperty(win.navigator, "language", {
          value: "en",
        });
      },
    });

    cy.wait(0);
    // set language to en
    cy.get('[data-cy="language-switcher"]')
      .trigger("mousedown")
      .get("span")
      .contains("en")
      .trigger("click");

    cy.wait(0);

    // Find a link with an href attribute containing "login" and click it
    cy.get("button").contains("Profile").click({ waitForAnimations: true });

    cy.wait(500);

    // Find a link with an href attribute containing "login" and click it
    cy.get('a[href*="/login"]').eq(0).trigger("click", { force: true }); //-> init of the header make link hidden

    // The new url should include "/login"
    cy.url().should("include", "/login");

    // The new page should contain an h1 with "Login"
    cy.get("h1").contains("Login");

    cy.get('input[name="email"]').type("yuhur1985@gmail.com");
    cy.get('input[name="password"]').type("123");

    cy.get('button[data-cy="login-in-button"]').click();

    //redirect to HP
    cy.url().should("include", "/");
  });

  it("should navigate to Tale catalog", () => {
    cy.setCookie("Accept-Language", "en");
    // Start from the index page
    cy.visit("http://localhost:3000/en", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", {
          value: ["en-US"],
        });
      },
    });

    // set language to en
    cy.get('[data-cy="language-switcher"]').click().get("span").contains("en").click();

    // Find a link with a href attribute containing "fairyTales" and click it
    // there are 2 links with the same href, so we need to use eq(0) to click the first one
    cy.get('a[href*="/fairyTales"]')
      .should("not.have.css", "display", "none")
      .eq(0)
      .click({ force: true }); // -> init of the header make link hidden

    // The new page should contain an h1 with "Catalog of the Tales"
    cy.get("h1").contains("Catalog of the Tales");
  });
});
