describe("Navigation", () => {
  it("Should navigate to Cart", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="cart"]').click();

    cy.url().should("include", "/cart");

    cy.get("h1").contains("Your Wardrobe Revival cart.");
  });
});
