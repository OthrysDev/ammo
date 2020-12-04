import { io } from 'socket.io-client';
import MockedSocket from './MockedSocket';

interface Socket {
    connected: boolean;
    on(event: string, listener: (...args: unknown[]) => void): void;
    emit(event: string, ...args: unknown[]): void;
    connect(): void;
    disconnect(): void;
}
class WS {
    static getSocket = (url: string): Socket => {
        // @ts-ignore
        if (window.Cypress) {
            // @ts-ignore
            if (!window.Cypress.io) window.Cypress.io = new MockedSocket();
            // @ts-ignore
            return window.Cypress.io;
        }
        return io(url);
    };
}

export default WS;
