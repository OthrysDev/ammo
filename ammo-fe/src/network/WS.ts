import { io, Manager } from 'socket.io-client';
import MockedSocket from './MockedSocket';

export interface Socket {
    connected: boolean;
    on(event: string, listener: (...args: unknown[]) => void): void;
    emit(event: string, ...args: unknown[]): void;
    connect(): void;
    disconnect(): void;

    // For test purposes
    isSubscribedToBullets: boolean;
}

export const manager = new Manager('http://localhost:3001');

class WS {
    static socket = null;

    static getSocket(url: string): Socket {
        // @ts-ignore
        if (window.Cypress) {
            // @ts-ignore
            if (!window.Cypress.io) window.Cypress.io = new MockedSocket();
            // @ts-ignore
            return window.Cypress.io;
        }

        if (!this.socket) this.socket = io(url);
        return this.socket;
    }
}

export default WS;
