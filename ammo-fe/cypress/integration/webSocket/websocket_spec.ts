import MockedSocket from 'socket.io-mock';
import { bulletMock } from '../../../src/shared/mocks/Bullets';

const socket = new MockedSocket();

describe('WebSocket', () => {
    before(() => {
        cy.visit('/');

        /* Add the listener to intercept the bullet the will be send by the test
            and dispatch it to Redux jsut like the App do
        */
        socket.on('bullet', ({ bullet }) => {
            cy.window()
                .its('store')
                .invoke('dispatch', { type: 'RECEIVED_BULLET', bullet });
        });
    });

    after(() => {
        socket.removeAllListeners();
        socket.disconnect();
    });

    it('Must connect properly to the server', () => {
        cy.get('[data-cy=ws-reconnection-toast]').should('not.exist');
    });

    it('Server sends a bullet, must see the bullet on the UI', () => {
        socket.socketClient.emit('bullet', { bullet: bulletMock });

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Disconnect the webSocket - Ui must change accordingly', () => {
        cy.window().its('store').invoke('dispatch', { type: 'DISCONNECTED' });

        cy.get('[data-cy=ws-reconnection-toast]');
    });
});

/* Call the mocked ws here, and link the app with the real ws */
