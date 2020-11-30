import SocketMock from 'socket.io-mock';
import { io, Socket } from 'socket.io-client';

// Using an external custom-built class for WS because of issues for mocking IO behaviour
// in Cypress tests. This class will return a real Socket IO or a mock socket regarding
// the env ('test' or not 'test')
class WS {
    private socket: Socket;

    private constructor(url: string) {
        // @ts-ignore
        if (window.Cypress) {
            this.socket = new SocketMock();
        } else {
            this.socket = io(url);
        }
    }

    static getInstance(url: string): WS {
        return new WS(url);
    }

    on = (event: string, cbk: (args: unknown) => void): void => {
        this.socket.on(event, cbk);
    };

    emit = (event: string, args?: unknown): void => {
        if (!this._isMock()) throw new Error('Only test WS mocks can emit');

        (this.socket as SocketMock).socketClient.emit(event, args);
    };

    connect = (): void => {
        this.socket.connect();
    };

    removeAllListeners = (): void => {
        if (!this._isMock())
            throw new Error('Only test WS mocks can call removeAllListeners');

        (this.socket as SocketMock).removeAllListeners();
    };

    disconnect = (): void => {
        this.socket.disconnect();
    };

    private _isMock = (): boolean => {
        // @ts-ignore
        return !!window.Cypress;
    };

    get connected(): boolean {
        if ((this.socket as SocketMock).socketClient) {
            return (this.socket as SocketMock).socketClient.connected;
        }
        return this.socket.connected;
    }
}

export default WS;
