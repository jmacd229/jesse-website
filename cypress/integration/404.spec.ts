context('404', () => {
  before(() => {
    cy.visit(`${Cypress.config().baseUrl}/does_not_exist`, {
      failOnStatusCode: false,
    });
  });

  it('Should navigate to the 404 page', () => {
    cy.get('h1').should('have.text', '404');
    cy.get('h2').should(
      'have.text',
      "Sorry, you've managed to stumble upon a page that doesn't exist."
    );
  });

  it('Should go back to home page on button click', () => {
    cy.findByText('Back to home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
