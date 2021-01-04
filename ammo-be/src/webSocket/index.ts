import io, { Socket } from 'socket.io';
import http from 'http';

let ioServer: io.Server;

let isRecording = false;

const initWS = (server: http.Server): void => {
    ioServer = new io.Server(server, {
        cors: {
            origin: ['http://localhost:3000'],
        },
    });

    isRecording = true;

    ioServer.on('connection', (s: Socket) => {
        s.on('toggleRecord', (cbk) => {
            isRecording = !isRecording;
            cbk(isRecording);
        });

        s.on('disconnecting', () => {
            isRecording = false;
        });
    });
};

export { initWS, ioServer, isRecording };
