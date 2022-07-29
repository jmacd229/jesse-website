import 'cypress-plugin-tab';
import '@testing-library/cypress/add-commands';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      tab(): Chainable<Element>;
    }
  }
}
