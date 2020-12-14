import { bulletMock } from '../../src/shared/mocks/Bullet.mock';

describe('Error boundary behaviors', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.createBullet(bulletMock);
    });

    it('Visiting unknow URL, being redirected on 404 page and going back to home page - bullets should still be visible', () => {
        cy.pushHistory('/randomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Clicking on the unexpected error page "home" button - bullets should be gone', () => {
        cy.reachErrorBoundary();

        cy.get('[data-cy=error-button]').click();

        cy.get('[data-cy=main-pannel]').children().should('have.length', 0);
    });
});
