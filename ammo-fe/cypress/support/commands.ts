// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable<> {
        /**
         * Dispatch an undefined Bullet to make the UI crash
         * @example
         * cy.reachErrorBoundary()
         */
        reachErrorBoundary: typeof reachErrorBoundary;
        /**
         * Dispatch a bullet to redux
         * @example
         * cy.createBullet(bullet)
         */
        createBullet: typeof createBullet;
        /**
         * Goes to a route using react router and **without** reloading the page!
         * @example
         * cy.goToRoute('/home')
         */
        goToRoute: typeof goToRoute;
    }
}

const createBullet = (bullet): Cypress.Chainable<unknown> => {
    return cy
        .window()
        .its('store')
        .invoke('dispatch', { type: 'RECEIVED_BULLET', bullet });
};

Cypress.Commands.add('createBullet', createBullet);

const reachErrorBoundary = (): Cypress.Chainable<unknown> => {
    cy.on('uncaught:exception', () => false);

    return createBullet(undefined);
};

Cypress.Commands.add('reachErrorBoundary', reachErrorBoundary);

const goToRoute = (route: string): Cypress.Chainable<unknown> =>
    cy.window().its('routerHistory').invoke('push', route);

Cypress.Commands.add('goToRoute', goToRoute);
