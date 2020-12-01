describe('Routing', () => {
    beforeEach(() => cy.visit('/'));

    it('Should lead to the layout page', () => {
        cy.get('[data-cy=layout-root]').should('exist');
    });

    it('Should lead to the 404 page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=not-found-page]').should('exist');
    });

    it('Should redirect to home page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.location('pathname').should('eq', '/');
    });

    it('Should lead to the error boudary UI', () => {
        cy.reachErrorBoundary();

        cy.get('[data-cy=unexpected-error-page').should('exist');
    });

    it('Should redirect to home page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.location('pathname').should('eq', '/');
    });
});
