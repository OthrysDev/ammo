import { bulletMock } from '../../src/shared/mocks/Bullet.mock';
import en from '../../src/i18n/en';

describe('Bullets', () => {
    before(() => {
        cy.visit('/');

        cy.emitBullet(bulletMock);
    });

    it('Hovering the collapse button of a bullet - should display the tooltip "Uncollapse"', () => {
        cy.get(
            `[data-cy=bullet-header-collapse-button-${bulletMock.id}]`
        ).trigger('mouseover');

        cy.get(
            `[id=bullet-header-collapse-button-${bulletMock.id}-tooltip]`
        ).should('contain', en.Uncollapse);
    });

    it('Hovering the collapse button of a script - should display the tooltip "Uncollapse"', () => {
        cy.get(
            `[data-cy=script-header-collapse-button-${bulletMock.id}]`
        ).trigger('mouseover');

        cy.get(
            `[id=script-header-collapse-button-${bulletMock.id}-tooltip]`
        ).should('contain', en.Uncollapse);
    });

    it('Clicking on the collapse button of a bullet and hovering it - should display the tooltip "Collapse"', () => {
        cy.get(
            `[data-cy=bullet-header-collapse-button-${bulletMock.id}]`
        ).click();

        cy.get(
            `[data-cy=bullet-header-collapse-button-${bulletMock.id}]`
        ).trigger('mouseover');

        cy.get(
            `[id=bullet-header-collapse-button-${bulletMock.id}-tooltip]`
        ).should('contain', en.Collapse);
    });

    it('Clicking on the collapse button of a script and hovering it - should display the tooltip "Collapse"', () => {
        cy.get(
            `[data-cy=script-header-collapse-button-${bulletMock.id}]`
        ).click();

        cy.get(
            `[data-cy=script-header-collapse-button-${bulletMock.id}]`
        ).trigger('mouseover');

        cy.get(
            `[id=script-header-collapse-button-${bulletMock.id}-tooltip]`
        ).should('contain', en.Collapse);
    });
});
