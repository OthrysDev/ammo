import * as React from 'react';
import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Bullet } from 'shared/types/Bullet';
import WS from 'network/WS';
import { WebSocketReducerActionType } from 'redux/reducers/webSocketReducer';
import { BulletReducerActionType } from 'redux/reducers/bulletReducer';

type WSProvider = {
    init: () => void;
    emit: (event: string, ...args: unknown[]) => void;
    connected: boolean;
};

const WSContext = createContext({});

const useWSProvider = (): WSProvider => {
    const dispatch = useDispatch();
    const [connected, setConnected] = React.useState(false);

    let initialized = false;
    const socket = WS.getSocket('http://localhost:3001');

    const init = (): void => {
        if (initialized) return;
        initialized = true;

        // This part is for the mocked WS, figure out a way to remove it
        if (socket.connected)
            dispatch({ type: WebSocketReducerActionType.CONNECTED });
        else dispatch({ type: WebSocketReducerActionType.DISCONNECTED });

        socket.on('connect', () => {
            setConnected(true);
            dispatch({ type: WebSocketReducerActionType.CONNECTED });
        });

        socket.on('bullet', ({ bullet }: { bullet: Bullet }) => {
            dispatch({ type: BulletReducerActionType.RECEIVED_BULLET, bullet });
        });

        // For a list of all reasons why the ws can disconnect : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
        socket.on('disconnect', (reason: string) => {
            dispatch({ type: WebSocketReducerActionType.DISCONNECTED });
            setConnected(false);
            if (reason === 'io server disconnect') {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
                dispatch({ type: WebSocketReducerActionType.CONNECTED });
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
