import WS from '../../src/network/WS';
import { bulletMock } from '../../src/shared/mocks/Bullet.mock';

const socket = WS.getSocket('http://localhost:3001');

describe('Top bar', () => {
    before(() => {
        cy.visit('/');
    });

    it('Recorder button is clickable as we are connected', () => {
        cy.get('[data-cy=recorder-button]').should('be.enabled');
    });

    it('Recorder button first image should be pause', () => {
        cy.get('[data-cy=recording-button]').should('not.be.visible');
        cy.get('[data-cy=recording-button-pause]').should('be.visible');

        // Button should be highlighted
        cy.get('[data-cy=recorder-button]').should(($el) => {
            expect($el[0].className).not.to.match(/off/);
        });
    });

    it('Recorder button should switch inner images on toggle', () => {
        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('be.visible');
        cy.get('[data-cy=recording-button-pause]').should('not.be.visible');

        // Button should not be highlighted
        cy.get('[data-cy=recorder-button]').should(($el) => {
            expect($el[0].className).to.match(/off/);
        });

        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('not.be.visible');
        cy.get('[data-cy=recording-button-pause]').should('be.visible');

        // Button should be highlighted
        cy.get('[data-cy=recorder-button]').should(($el) => {
            expect($el[0].className).not.to.match(/off/);
        });
    });

    it('Pause the recorder and emit a bullet - should not appear in the UI', () => {
        cy.get('[data-cy=recorder-button]')
            .click()
            .then(() => {
                cy.emitBullet(bulletMock);

                cy.get('[data-cy=main-pannel]')
                    .children()
                    .should('have.length', 0);
            });
    });

    it('Start the recorder and emit a bullet - should appear in the UI', () => {
        cy.get('[data-cy=recorder-button]')
            .click()
            .then(() => {
                cy.emitBullet(bulletMock);
                cy.get('[data-cy=main-pannel]')
                    .children()
                    .should('have.length', 1);
            });
    });

    it('Socket disconnects - recorder button should still be clickable and change images on toggle', () => {
        socket.disconnect();

        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('be.visible');
        cy.get('[data-cy=recording-button-pause]').should('not.be.visible');

        // Button should not be highlighted
        cy.get('[data-cy=recorder-button]').should(($el) => {
            expect($el[0].className).to.match(/off/);
        });

        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('not.be.visible');
        cy.get('[data-cy=recording-button-pause]').should('be.visible');

        // Button should be highlighted
        cy.get('[data-cy=recorder-button]').should(($el) => {
            expect($el[0].className).not.to.match(/off/);
        });
    });

    it('Socket reconnects, receiving a bullet - bullet should display', () => {
        socket.connect();

        // Use this assertion to wait for the bullets chan to re-subscribe.
        // As the re-subscription is triggered in a useEffect it's async, so use
        // 'should' to check async data state
        cy.get(socket).should(($socket) => {
            expect($socket[0].isSubscribedToBullets).to.equal(true);
        });

        cy.emitBullet(bulletMock);
        cy.get('[data-cy=main-pannel]').children().should('have.length', 2);
    });

    it('Socket disconnects, pausing the button, reconnecting, receiving a bullet - bullet should not display as we paused', () => {
        socket.disconnect();

        cy.get('[data-cy=recorder-button]').click();

        socket.connect();

        cy.emitBullet(bulletMock);
        cy.get('[data-cy=main-pannel]').children().should('have.length', 2);
    });

    it('Socket disconnects, pressing play, reconnecting, receiving a bullet - bullet should display', () => {
        socket.disconnect();

        cy.get('[data-cy=recorder-button]').click();

        socket.connect();

        cy.emitBullet(bulletMock);
        cy.get('[data-cy=main-pannel]').children().should('have.length', 3);
    });
});
