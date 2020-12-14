import { bulletMock } from '../../src/shared/mocks/Bullet.mock';
import WS from '../../src/network/WS';

const socket = WS.getSocket('http://localhost:3001');

describe('WebSocket', () => {
    before(() => {
        cy.visit('/');
    });

    it('Visiting root URL - reconnection toast should not be visible as ws should be connected', () => {
        cy.get('[data-cy=ws-reconnection-toast]').should('not.exist');
    });

    it('Server sends a bullet - should be displayed in the main pannel', () => {
        cy.emitBullet(bulletMock);

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Disconnecting the ws - reconnection toast should be visible', () => {
        socket.disconnect();

        cy.get('[data-cy=ws-reconnection-toast]');
    });
});
