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

class WS {
    static socket = null;

    static manager = null;

    static getSocketAndManager(
        url: string
    ): { socket: Socket; manager: Manager } {
        if (!this.manager) this.manager = new Manager(url);

        // @ts-ignore
        if (window.Cypress) {
            // @ts-ignore
            if (!window.Cypress.io) window.Cypress.io = new MockedSocket();
            // @ts-ignore
            return { socket: window.Cypress.io, manager: this.manager };
        }

        if (!this.socket) this.socket = io(url);

        return { socket: this.socket, manager: this.manager };
    }
}

export default WS;
