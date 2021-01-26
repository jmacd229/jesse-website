/// <reference types="cypress" />

context('404', () => {
    before(() => {
        cy.visit('http://localhost:8000/does_not_exist', { failOnStatusCode: false })
        cy.get('button').click();
    })

    it('Should navigate to the 404 page', () => {
        cy.get('h1').should('have.text', '404');
        cy.document().toMatchImageSnapshot();
    })

    it('Should go back to home page on button click', () => {
        cy.get('a.anim-button').click();
        cy.url().should('eq', 'http://localhost:8000/')
    })


})