context('Under Construction', () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Should show building blocks animation with tooltip instead of navigation links', () => {
    cy.findByRole('group', {
      name: 'More pages are currently in progress',
    }).should('exist');
  });

  it('Should expand and collapse on click with tabbing inside', () => {
    cy.findByRole('button', { name: 'Read More' }).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1550);
    cy.tab();
    cy.findByRole('link', { name: 'the public GitHub repo' }).should(
      'have.focus'
    );
    cy.tab();
    cy.findByRole('link', {
      name: "Navigate to Jesse MacDougall's LinkedIn profile",
    }).should('have.focus');
    cy.findByRole('button', { name: 'Read More' }).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2050);
    cy.tab();
    cy.focused().should('not.have.text', 'the public GitHub repo');
  });
});
