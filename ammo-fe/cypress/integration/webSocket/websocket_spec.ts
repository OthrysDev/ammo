beforeEach(() => {
    cy.visit('/');
});

describe('WebSocket', () => {
    it('Must connect properly to the server', () => {
        cy.get('#ws-connected');
    });

    it('Disconnect the webSocket - Ui must change accordingly', () => {
        cy.window().its('store').invoke('dispatch', { type: 'disconnect' });

        cy.get('#ws-not-connected');
    });
});
