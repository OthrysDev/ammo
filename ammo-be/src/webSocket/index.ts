import io from 'socket.io';
import http from 'http';

let ioServer: io.Server;

const initWS = (server: http.Server): void => {
    ioServer = new io.Server(server, {
        cors: {
            origin: ['http://localhost:3000'],
        },
    });
};

export { initWS, ioServer };
