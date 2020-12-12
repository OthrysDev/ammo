import { bulletMock } from '../../src/shared/mocks/Bullet.mock';
import WS from '../../src/network/WS';
import { BulletReducerActionType } from '../../src/redux/reducers/bulletReducer';

const socket = WS.getInstance('http://localhost:3001');

describe('Responsiveness of the main layout', () => {
    beforeEach(() => {
        cy.viewport('iphone-5');
    });

    before(() => {
        cy.visit('/');

        /**
         * Add the listener to intercept the bullet the will be send by the test
         * and dispatch it to Redux jsut like the App do
         */
        socket.on('bullet', ({ bullet }) => {
            cy.window().its('store').invoke('dispatch', {
                type: BulletReducerActionType.RECEIVED_BULLET,
                bullet,
            });
        });

        socket.emit('bullet', { bullet: bulletMock });
    });

    after(() => {
        socket.removeAllListeners();
        socket.disconnect();
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
