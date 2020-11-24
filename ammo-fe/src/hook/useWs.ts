import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';

const socket = io('http://localhost:3001');

const useWS = (): void => {
    const dispatch = useDispatch();

    socket.on('connect', () => {
        dispatch({ type: 'connected' });
    });

    socket.on('bullet', ({ bullet }) => {
        dispatch({ type: 'receivedBullet', bullet });
    });

    // For a list of all reasons why the ws can disconenct : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
    socket.on('disconnect', (reason: string) => {
        dispatch({ type: 'disconnect' });

        if (reason === 'io server disconnect') {
            // the disconnection was initiated by the server, you need to reconnect manually
            socket.connect();
            dispatch({ type: 'connected' });
        }
        // else the socket will automatically try to reconnect
    });
};

export default useWS;
