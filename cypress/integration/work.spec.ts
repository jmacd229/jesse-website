import { Page } from '../../src/model/enums/pages.enum';

const PRODIGY_TITLE = 'Prodigy Education';
const CANADA_LIFE_TITLE = 'Canada Life Assurance Company';

context('Work page', () => {
  before(() => {
    cy.visit(Page.WORK);
  });

  it('Should navigate to the work page', () => {
    cy.findByRole('heading', { name: 'Work' }).should('exist');
    cy.findByRole('heading', { name: 'Professional' }).should('exist');
    cy.findByRole('heading', { name: 'Personal' }).should('exist');
  });

  it('Should be able to expand and collapse work items', () => {
    // Prodigy
    cy.findByRole('button', { name: new RegExp(PRODIGY_TITLE) })
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.findByText(/Prodigy was my first professional experience/i).should(
      'exist'
    );
    cy.findByRole('button', { name: new RegExp(PRODIGY_TITLE) })
      .click()
      .should('have.attr', 'aria-expanded', 'false');

    // Canada Life
    cy.findByRole('button', { name: new RegExp(CANADA_LIFE_TITLE) })
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.findByText(/I first started working at Canada Life/i).should('exist');
    cy.findByRole('button', { name: new RegExp(CANADA_LIFE_TITLE) })
      .click()
      .should('have.attr', 'aria-expanded', 'false');
  });

  it("should display carousel buttons if there's not enough room for all items, and hide them if there is", () => {
    cy.viewport('macbook-11');
    cy.findByRole('listitem', { name: PRODIGY_TITLE }).within(() => {
      cy.findByRole('button', { name: /Previous item/i }).should('exist');
      cy.findByRole('button', { name: /Next item/i }).should('exist');
    });
    cy.viewport('macbook-16');
    cy.findByRole('listitem', { name: PRODIGY_TITLE }).within(() => {
      cy.findByRole('button', { name: /Previous item/i }).should('not.exist');
      cy.findByRole('button', { name: /Next item/i }).should('not.exist');
    });
  });

  it("should expand a tool's description upon clicking", () => {
    const ITEM_NAME = 'Styled Components';
    cy.findByRole('listitem', { name: ITEM_NAME }).should(
      'not.have.attr',
      'aria-describedby'
    );
    cy.findByRole('listitem', { name: ITEM_NAME })
      .click()
      .should('have.attr', 'aria-describedby');
    cy.findByRole('heading', { name: ITEM_NAME });
    cy.findByText(
      'Designed components with complex interactions using props, attributes, and css selectors'
    );
  });

  it('should allow for navigation via the keyboard or buttons', () => {
    const ITEM_NAME = 'CSharp';
    const NEXT_ITEM_NAME = 'ASP.Net';
    const PREVIOUS_ITEM_NAME = 'Docker';

    // Arrow keys
    cy.findByRole('listitem', { name: ITEM_NAME })
      .click()
      .type('{rightArrow}')
      .should('not.have.attr', 'aria-describedby');
    cy.findByRole('listitem', { name: NEXT_ITEM_NAME }).should(
      'have.attr',
      'aria-describedby'
    );
    cy.findByRole('listitem', { name: NEXT_ITEM_NAME })
      .type('{leftArrow}')
      .should('not.have.attr', 'aria-describedby');
    cy.findByRole('listitem', { name: ITEM_NAME }).should(
      'have.attr',
      'aria-describedby'
    );

    // Carousel Buttons
    cy.findByRole('listitem', { name: CANADA_LIFE_TITLE }).within(() => {
      cy.findByRole('button', { name: /Previous item/i }).click();
      cy.findByRole('listitem', { name: ITEM_NAME }).should(
        'not.have.attr',
        'aria-describedby'
      );
      cy.findByRole('listitem', { name: PREVIOUS_ITEM_NAME }).should(
        'have.attr',
        'aria-describedby'
      );
      cy.findByRole('button', { name: /Next item/i }).click();
      cy.findByRole('listitem', { name: ITEM_NAME }).should(
        'have.attr',
        'aria-describedby'
      );
      cy.findByRole('listitem', { name: PREVIOUS_ITEM_NAME }).should(
        'not.have.attr',
        'aria-describedby'
      );
    });
  });
});
