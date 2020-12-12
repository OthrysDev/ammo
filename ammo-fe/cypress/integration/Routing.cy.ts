describe('Routing', () => {
    beforeEach(() => cy.visit('/'));

    it('Visiting root URL - should display the root layout', () => {
        cy.get('[data-cy=layout-root]').should('exist');
    });

    it('Visiting unknown URL - should display the 404 page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=not-found-page]').should('exist');
    });

    it('Clicking on 404 "home" button - should redirect to home page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.location('pathname').should('eq', '/');
    });

    it('Provoking unexpected error - should display the unexpected error page', () => {
        cy.reachErrorBoundary();

        cy.get('[data-cy=unexpected-error-page').should('exist');
    });

    it('Clicking on unexpected error page "home" button - should refresh the page', () => {
        cy.visit('/aRandomUrl');

        cy.get('[data-cy=error-button]').click();

        cy.location('pathname').should('eq', '/');
    });
});
