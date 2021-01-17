import io, { Socket } from 'socket.io';
import http from 'http';

let ioServer: io.Server;

// Bullets sub statuts
let isSubbedToBullets = false;
const getIsSubbedToBullets = (): boolean => isSubbedToBullets;

// Disconnect callbacks. Can be useful for testing
const disconnectCbks: { (): void }[] = [];
const addDisconnectCbk = (cbk: { (): void }): void => {
    disconnectCbks.push(cbk);
};

const initWS = (server: http.Server): void => {
    ioServer = new io.Server(server, {
        cors: {
            origin: ['http://localhost:3000'],
        },
    });

    ioServer.on('connect', (s: Socket) => {
        s.on('bullets::sub', ({ sub }, cbk) => {
            // Switch to new sub state
            isSubbedToBullets = sub;

            cbk(isSubbedToBullets);
        });

        s.on('disconnect', () => {
            isSubbedToBullets = false;

            disconnectCbks.forEach((cbk) => cbk());
        });
    });
};

export { initWS, ioServer, getIsSubbedToBullets, addDisconnectCbk };
