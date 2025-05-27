describe("aboutus page", () => {
  beforeEach(() => {
    cy.visit("u0846871-realbeans.myshopify.com")
    cy.get('input[name="password"').type("yirtaw")
    cy.get('button[type="submit"').click()
    cy.visit("u0846871-realbeans.myshopify.com/pages/about-us")
  })

  context("Aboutus text", () => {
    it("the text should be correct", () => {
      cy.get("em").should(
        "contain",
        '“From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent.”'
        )
    })
  })
  
})
