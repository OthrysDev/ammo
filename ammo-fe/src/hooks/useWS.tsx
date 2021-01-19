import React, { useState, useEffect, useContext } from 'react';
import { Bullet } from 'shared/types/Bullet';
import WS, { manager } from 'network/WS';
import { useSelector } from 'react-redux';
import useBulletActions from 'redux/actions/useBulletActions';
import { RootReducer } from 'redux/reducers';
import WSBulletsEvent from 'shared/types/WSBulletsEvent';

type WSProvider = {
    init: () => void;
    connected: boolean;
};

const WSContext = React.createContext({});

const useWSProvider = (): WSProvider => {
    const [connected, setConnected] = useState(false);
    const { addBulletAction } = useBulletActions();
    const [subscribedToBullets, setSubscribedToBullets] = useState(false);
    const [loading, setLoading] = useState(false);
    const recorderButtonToggled = useSelector(
        (state: RootReducer) => state.ui.recorderButtonToggled
    );

    let initialized = false;
    const socket = WS.getSocket('http://localhost:3001');

    const init = (): void => {
        // Already init. Return
        if (initialized) return;

        initialized = true;

        // This part is for the mocked WS, figure out a way to remove it
        if (socket.connected) setConnected(true);
        else setConnected(false);

        // Only the manager is able to listen on the connection error, as this is the one who handles the connection
        manager.on('error', (err) => {
            console.error('[WS] An unexpected error happened', err);
        });

        socket.on('connect', () => {
            setConnected(true);
        });

        // For a list of all reasons why the ws can disconnect : https://socket.io/docs/v3/client-api/#Event-%E2%80%98disconnect%E2%80%99
        socket.on('disconnect', (reason: string) => {
            setConnected(false);

            if (reason === 'io server disconnect') {
                // Disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
            }
            // Else the socket will automatically try to reconnect
        });

        socket.on(WSBulletsEvent.EMIT, ({ bullet }: { bullet: Bullet }) => {
            addBulletAction(bullet);
        });
    };

    const subscribeToBullets = (subscribe: boolean): void => {
        if (loading) return;

        setLoading(true);

        socket.emit(
            WSBulletsEvent.SUBSCRIBE,
            { subscribe },
            (subscribed: boolean) => {
                setSubscribedToBullets(subscribed);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        const isBulletSubcriptionSynchedWithServer =
            subscribedToBullets === recorderButtonToggled;

        // No longer connected. Set sub state to false
        if (!connected) {
            setSubscribedToBullets(false);
        }
        // Connected: make sure sub (server) state and rec btn state are the same
        else if (!isBulletSubcriptionSynchedWithServer) {
            // Send network state sync
            subscribeToBullets(recorderButtonToggled);
        }
    }, [connected, recorderButtonToggled]);

    return {
        init,
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
