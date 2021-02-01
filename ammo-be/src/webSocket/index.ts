import io, { Socket } from 'socket.io';
import http from 'http';
import WSBulletsEvent from 'shared/types/WSBulletsEvent';
import Config from 'util/Config';

let ioServer: io.Server;

// Bullets subscribe statuts
let isSubscribedToBullets = false;
const getIsSubscribedToBullets = (): boolean => isSubscribedToBullets;

// Disconnect callbacks. Can be useful for testing
const disconnectCbks: { (): void }[] = [];
const addDisconnectCbk = (cbk: { (): void }): void => {
    disconnectCbks.push(cbk);
};

const initWS = (server: http.Server): void => {
    ioServer = new io.Server(server, {
        cors: {
            origin: [Config.feUrl],
        },
    });

    ioServer.on('connect', (s: Socket) => {
        s.on(WSBulletsEvent.SUBSCRIBE, ({ subscribe }, cbk) => {
            // Switch to new sub state
            isSubscribedToBullets = subscribe;

            cbk(isSubscribedToBullets);
        });

        s.on('disconnect', () => {
            isSubscribedToBullets = false;

            disconnectCbks.forEach((cbk) => cbk());
        });
    });
};

export { initWS, ioServer, getIsSubscribedToBullets, addDisconnectCbk };
