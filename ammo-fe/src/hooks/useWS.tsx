import * as React from 'react';
import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Bullet } from 'shared/types/Bullet';
import WS from 'network/WS';

type returnValue = {
    init: () => void;
    emit: (event: string, ...args: unknown[]) => void;
    connected: boolean;
};

const WsContext = createContext({});

const useProvideWS = (): returnValue => {
    const dispatch = useDispatch();
    const [connected, setConnected] = React.useState(false);

    let initialized = false;
    const socket = WS.getSocket('http://localhost:3001');

    const init = (): void => {
        if (initialized) return;
        initialized = true;

        // This part is for the mocked WS, figure out a way to remove it
        if (socket.connected) dispatch({ type: 'CONNECTED' });
        else dispatch({ type: 'DISCONNECTED' });

        socket.on('connect', () => {
            setConnected(true);
            dispatch({ type: 'CONNECTED' });
        });

        socket.on('bullet', ({ bullet }: { bullet: Bullet }) => {
            dispatch({ type: 'RECEIVED_BULLET', bullet });
        });

        // For a list of all reasons why the ws can disconnect : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
        socket.on('disconnect', (reason: string) => {
            dispatch({ type: 'DISCONNECTED' });
            setConnected(false);
            if (reason === 'io server disconnect') {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
                dispatch({ type: 'CONNECTED' });
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

export const ProvideWS = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    const ws = useProvideWS();

    return <WsContext.Provider value={ws}>{children}</WsContext.Provider>;
};

const useWS = (): returnValue => useContext(WsContext) as returnValue;

export default useWS;
