import { bulletMock } from '../../src/shared/mocks/Bullet.mock';

describe('Error boundary behaviors', () => {
    before(() => {
        cy.visit('/');
        cy.emitBullet(bulletMock);
    });

    it('Visiting unknow URL, being redirected on 404 page and going back to home page - bullets should still be visible', () => {
        // Make sure there's a bullet in the main pannel
        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);

        cy.pushHistory('/randomUrl');

        cy.get('[data-cy=error-button]').click();

        // Make sure it's still there
        cy.get('[data-cy^=bullet-script-row-]').should('have.length', 1);
    });

    it('Having an unexpected error, clicking on the unexpected error page "home" button - bullets should be gone', () => {
        // Make sure there's a bullet in the main pannel
        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);

        cy.reachErrorBoundary();

        cy.get('[data-cy=error-button]').click();

        // Bullet should be gone
        cy.get('[data-cy^=bullet-script-row-]').should('have.length', 0);
    });
});
