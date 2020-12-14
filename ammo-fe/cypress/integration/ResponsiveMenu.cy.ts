import { bulletMock } from '../../src/shared/mocks/Bullet.mock';

describe('Responsiveness of the main layout', () => {
    beforeEach(() => {
        cy.viewport('iphone-5');
    });

    before(() => {
        cy.visit('/');

        cy.createBullet(bulletMock);
    });

    it('Visiting root URL and receiving a bullet - should display the responsive root layout with only the bullets visible', () => {
        cy.get('[data-cy=layout-root]').should('exist');

        cy.shouldBeInViewport('[data-cy^=main-pannel-left-grid-bullet-]');

        cy.shouldNotBeInViewport('[data-cy^=main-pannel-right-grid-bullet-]');
    });

    it('Clicking on scripts button - should display scripts', () => {
        cy.get('[data-cy=scripts-view-button]').click();

        cy.shouldNotBeInViewport('[data-cy^=main-pannel-left-grid-bullet-]');

        cy.shouldBeInViewport('[data-cy^=main-pannel-right-grid-bullet-]');
    });

    it('Clicking on bullets button - should display bullets', () => {
        cy.get('[data-cy=bullets-view-button]').click();

        cy.shouldBeInViewport('[data-cy^=main-pannel-left-grid-bullet-]');

        cy.shouldNotBeInViewport('[data-cy^=main-pannel-right-grid-bullet-]');
    });
});
