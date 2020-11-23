import express from 'express';
import bodyParser from 'body-parser';

import io from 'socket.io';
import cors from 'cors';
import bulletRouter from 'routers/bulletRouter/tests';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const server = app.listen(3001);

const ioServer = new io.Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
    },
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bulletRouter);

export { ioServer };
export default server;
