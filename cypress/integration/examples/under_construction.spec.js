/// <reference types="cypress" />

context('Under Construction', () => {
    before(() => {
        cy.visit('http://localhost:8000')
    })

    it('Should say "More coming soon..." instead of links', () => {
        cy.get('header > div')
            .should('have.text', 'More coming soon...')
    })

    it('Should not allow tabbing inside of expander when collapsed', () => {
        cy.get('#under-construction button.expander-trigger').focus().tab()
        cy.get('#under-construction button.expander-trigger').should('have.focus');
    })

    it('Should expand and collapse on click with tabbing inside', () => {
        cy.get('#under-construction button.expander-trigger').click();
        cy.get('#under-construction .expander').should('have.class', 'expanded');
        cy.tab();
        cy.get('#under-construction .expander-panel-content').should('have.focus');
        cy.get('#under-construction button.expander-trigger').click();
        cy.get('#under-construction .expander').should('not.have.class', 'expanded');
    })

})