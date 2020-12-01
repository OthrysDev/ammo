import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Bullet } from 'shared/types/Bullet';
import WS from 'network/WS';

const socket = WS.getInstance('http://localhost:3001');

const useWS = (): void => {
    const dispatch = useDispatch();

    // At app start, feed the correct connected / disconnected status tu Redux
    useEffect(() => {
        if (socket.connected) dispatch({ type: 'CONNECTED' });
        else dispatch({ type: 'DISCONNECTED' });
    }, []);

    socket.on('connect', () => {
        dispatch({ type: 'CONNECTED' });
    });

    socket.on('bullet', ({ bullet }: { bullet: Bullet }) => {
        dispatch({ type: 'RECEIVED_BULLET', bullet });
    });

    // For a list of all reasons why the ws can disconnect : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
    socket.on('disconnect', (reason: string) => {
        dispatch({ type: 'DISCONNECTED' });

        if (reason === 'io server disconnect') {
            // the disconnection was initiated by the server, you need to reconnect manually
            socket.connect();
            dispatch({ type: 'CONNECTED' });
        }
        // else the socket will automatically try to reconnect
    });
};

export default useWS;
