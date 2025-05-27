describe("home page", () => {
  beforeEach(() => {
    cy.visit("u0846871-realbeans.myshopify.com")
    cy.get('input[name="password"]').type("yirtaw")
    cy.get('button[type="submit"]').click()
  })

  context("Hero section", () => {
    it("the homepage intro contains the correct text", () => {
        cy.get("h2.banner__heading").should(
        "contain",
        "Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care."
        )
    })
  })
  
  context("Courses section", () => {
    it("Product list on home page are correct", () => {
        cy.get(".product-card-wrapper").should("have.length.at.least", 1)

        // Optionally, check that each product has a name and price
        cy.get(".product-card-wrapper").each(($card) => {
            cy.wrap($card).find("a.full-unstyled-link").should("exist")
            cy.wrap($card).find(".price-item").should("exist")
        })
    })
  })

  context("Search section", () => {
    it("Searched product is correct", () => {
        cy.get('summary[role="button"][aria-label="Search"]').click()
        cy.get('input.search__input.field__input').type("Roasted{enter}")

        cy.get('h3.card__heading').should("contain", "Roasted coffee beans 5kg")
    })
  })
})
