import WS from '../../src/network/WS';
import WSBulletsEvent from '../../src/shared/types/WSBulletsEvent';

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
         * Emits a bullet (mocking the BE)
         * @example
         * cy.emitBullet(bullet)
         */
        emitBullet: typeof emitBullet;
        /**
         * Goes to a route using react router and **without** reloading the page!
         * @example
         * cy.pushHistory('/home')
         */
        pushHistory: typeof pushHistory;
        /**
         * Tests if a DOM element is within the viewport
         * @example
         * cy.shouldBeInViewport('[data-cy^=some-element]');
         */
        shouldBeInViewport: typeof shouldBeInViewport;
        /**
         * Tests if a DOM element is NOT within the viewport
         * @example
         * cy.shouldNotBeInViewport('[data-cy^=some-element]');
         */
        shouldNotBeInViewport: typeof shouldNotBeInViewport;
    }
}

const socket = WS.getSocket('http://localhost:3001');

const emitBullet = (bullet): Cypress.Chainable<unknown> => {
    return socket.emit(WSBulletsEvent.EMIT, { bullet });
};

Cypress.Commands.add('emitBullet', emitBullet);

const reachErrorBoundary = (): Cypress.Chainable<unknown> => {
    cy.on('uncaught:exception', () => false);

    return emitBullet(undefined);
};

Cypress.Commands.add('reachErrorBoundary', reachErrorBoundary);

const pushHistory = (route: string): Cypress.Chainable<unknown> => {
    cy.window().its('routerHistory').invoke('push', route);
};

Cypress.Commands.add('pushHistory', pushHistory);

const isWithinWindow = (el): boolean => {
    const windowBounds = {
        top: 0,
        right: Cypress.$(cy.state('window')).width(),
        bottom: Cypress.$(cy.state('window')).height(),
        left: 0,
    };

    const elementRect = el[0].getBoundingClientRect();

    const elementBounds = {
        top: elementRect.y,
        right: elementRect.x + elementRect.width,
        bottom: elementRect.x + elementRect.height,
        left: elementRect.x,
    };

    return !(
        elementBounds.left >= windowBounds.right ||
        elementBounds.right <= windowBounds.left ||
        elementBounds.top >= windowBounds.bottom ||
        elementBounds.bottom <= windowBounds.top
    );
};

// https://github.com/cypress-io/cypress/issues/877#issuecomment-490504922
const shouldNotBeInViewport = (element): Cypress.Chainable<unknown> => {
    cy.get(element).should(($el) => {
        expect(isWithinWindow($el)).to.equal(false);
    });
};
Cypress.Commands.add('shouldNotBeInViewport', shouldNotBeInViewport);

const shouldBeInViewport = (element): Cypress.Chainable<unknown> => {
    cy.get(element).should(($el) => {
        expect(isWithinWindow($el)).to.equal(true);
    });
};
Cypress.Commands.add('shouldBeInViewport', shouldBeInViewport);
