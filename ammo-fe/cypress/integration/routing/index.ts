describe('Routing', () => {
    it('Should lead to the layout page', () => {
        cy.visit('/');

        cy.get('[data-cy=layout-root]').should('exist');
    });

    it('Should lead to the 404 page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=404-root]').should('exist');
    });
});

describe('Errors fallback', () => {
    beforeEach(() => cy.visit('/'));

    it('Should lead to the error boudary UI', () => {
        cy.on('uncaught:exception', () => {
            return false;
        });

        cy.window()
            .its('store')
            .invoke('dispatch', { type: 'RECEIVED_BULLET', bullet: undefined });

        cy.get('[data-cy=error-boundary-root]').should('exist');
    });
});
