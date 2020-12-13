import { bulletMock } from '../../src/shared/mocks/Bullet.mock';
import WS from '../../src/network/WS';
import { WebSocketReducerActionType } from '../../src/redux/reducers/webSocketReducer';

const socket = WS.getSocket('http://localhost:3001');

describe('WebSocket', () => {
    before(() => {
        cy.visit('/');
    });

    after(() => {
        socket.disconnect();
    });

    it('Visiting root URL - reconnection toast should not be visible as ws should be connected', () => {
        cy.get('[data-cy=ws-reconnection-toast]').should('not.exist');
    });

    it('Server sends a bullet - should be displayed in the main pannel', () => {
        socket.emit('bullet', { bullet: bulletMock });

        cy.get('[data-cy=main-pannel]').children().should('have.length', 1);
    });

    it('Disconnecting the ws - reconnection toast should be visible', () => {
        cy.window().its('store').invoke('dispatch', {
            type: WebSocketReducerActionType.DISCONNECTED,
        });

        cy.get('[data-cy=ws-reconnection-toast]');
    });
});
