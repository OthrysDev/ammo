import { bulletMock } from '../../../src/shared/mocks/Bullets';
import WS from '../../../src/network/WS';

const socket = WS.getSocket('http://localhost:3001');

describe('WebSocket', () => {
    before(() => {
        cy.visit('/');
    });

    after(() => {
        socket.disconnect();
    });

    it('Must connect properly to the server', () => {
        cy.get('[data-cy=ws-reconnection-toast]').should('not.exist');
    });

    it('Server sends a bullet, must see the bullet on the UI', () => {
        socket.emit('bullet', { bullet: bulletMock });

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Disconnect the webSocket - Ui must change accordingly', () => {
        cy.window().its('store').invoke('dispatch', { type: 'DISCONNECTED' });

        cy.get('[data-cy=ws-reconnection-toast]');
    });
});
