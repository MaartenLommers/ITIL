describe("catalog page", () => {
  beforeEach(() => {
    cy.visit("u0846871-realbeans.myshopify.com")
    cy.get('input[name="password"').type("yirtaw")
    cy.get('button[type="submit"').click()
    cy.visit("u0846871-realbeans.myshopify.com/collections/all")
  })

  context("Sorting changes order", () => {
    it("the catalog sorting works", () => {
      cy.get('li').first().should('exist')
      cy.get('li.grid__item').first().find('h3').should('contain', 'Blended coffee 5kg')
      cy.get('select#SortBy').select('title-descending')
      cy.get('li.grid__item').first().find('h3').should('contain', 'Roasted coffee beans 5kg')
    })
  })

  context("Item details", () => {
  it("Item has the correct details", () => {
    cy.get('li.grid__item').first().click()
    cy.get('h1').should('contain','Blended coffee 5kg')
    cy.get('span.price-item').should('contain','€55,00 EUR')
    cy.get('img.image-magnify-lightbox')
      .should('have.attr', 'src')
      .and('include', 'RealBeansBlendBag.png')
  })
})
  
})
