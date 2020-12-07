import { bulletMock } from '../../src/shared/mocks/Bullet.mock';

describe('Error boundary behaviors', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.createBullet(bulletMock);
    });

    it('Should redirect to home in case of a 404 - Bullets must be visible', () => {
        cy.pushHistory('/randomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Should refresh in case of unexpected error - Bullets must be gone', () => {
        cy.reachErrorBoundary();

        cy.get('[data-cy=error-button]').click();

        cy.get('[data-cy=main-pannel]').children().should('have.length', 0);
    });
});
