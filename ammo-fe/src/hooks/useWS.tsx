import * as React from 'react';
import { createContext, useContext } from 'react';
import { Bullet } from 'shared/types/Bullet';
import WS, { manager } from 'network/WS';
import useActions from './useActions';

type WSProvider = {
    init: () => void;
    emit: (event: string, ...args: unknown[]) => void;
    connected: boolean;
};

const WSContext = createContext({});

const useWSProvider = (): WSProvider => {
    const [connected, setConnected] = React.useState(false);
    const { ui, ws, bullets } = useActions();

    let initialized = false;
    const socket = WS.getSocket('http://localhost:3001');

    const init = (): void => {
        if (initialized) return;
        initialized = true;

        // This part is for the mocked WS, figure out a way to remove it
        if (socket.connected) ws.connectAction();
        else ws.disconnectAction();

        // Only the manager is able to listen on the connection error, as this is the one who handle connection
        manager.on('error', () => {
            // Whenever the socket fail connecting we toggle off the recorder
            ui.toggleRecordAction(false);
        });

        socket.on('connect', () => {
            setConnected(true);
            ws.connectAction();
        });

        socket.on('bullet', ({ bullet }: { bullet: Bullet }) => {
            bullets.addBulletAction(bullet);
        });

        // For a list of all reasons why the ws can disconnect : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
        socket.on('disconnect', (reason: string) => {
            ws.disconnectAction();

            ui.toggleRecordAction(false);
            setConnected(false);
            if (reason === 'io server disconnect') {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
                ws.connectAction();
            }
            // else the socket will automatically try to reconnect
        });
    };

    const emit = (event: string, ...args: unknown[]): void =>
        socket.emit(event, ...args);

    return {
        init,
        emit,
        connected,
    };
};

export const WSProvider = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    const ws = useWSProvider();

    return <WSContext.Provider value={ws}>{children}</WSContext.Provider>;
};

const useWS = (): WSProvider => useContext(WSContext) as WSProvider;

export default useWS;
