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

    it('Recorder button first image must be pause', () => {
        cy.get('[data-cy=recording-button-pause]').should('not.be.visible');
    });

    it('Recorder button must switch inner images on toggle', () => {
        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('be.visible');

        cy.get('[data-cy=recording-button-pause]').should('not.be.visible');

        cy.get('[data-cy=recorder-button]').click();

        cy.get('[data-cy=recording-button-record]').should('not.be.visible');

        cy.get('[data-cy=recording-button-pause]').should('be.visible');
    });

    it('Pause the recorder and emit a bullet - Must not appear in the UI', () => {
        cy.get('[data-cy=recorder-button]')
            .click()
            .then(() => {
                socket.emit('bullet', { bullet: bulletMock });

                cy.get('[data-cy=main-pannel]')
                    .children()
                    .should('have.length', 0);
            });
    });

    it('Start the recorder and emit a bullet - Must appear in the UI', () => {
        cy.get('[data-cy=recorder-button]')
            .click()
            .then(() => {
                socket.emit('bullet', { bullet: bulletMock });
                cy.get('[data-cy=main-pannel]')
                    .children()
                    .should('have.length', 1);
            });
    });

    it('Recorder button must not be clickable as we are disconnected', () => {
        socket.emit('disconnect');

        cy.get('[data-cy=recorder-button]').should('not.be.enabled');
    });

    it('Recorder button image must be back to the initial value as we are disconnected', () => {
        cy.get('[data-cy=recording-button-record]').should('be.visible');
    });
});
