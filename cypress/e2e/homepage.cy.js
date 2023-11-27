describe('EFS homepage test', () => {
  it('should display the main heading desktop', () => {
    cy.viewport(1920,1080)
    cy.visit('/')
    cy.get("h1").first().should("contain", "Lower Your")
  })
  
  it('should display the main heading mobile', () => {
    cy.viewport(400,800)
    cy.visit('/')
    cy.get("h1").first().should("contain", "Lower Your")
  })
})