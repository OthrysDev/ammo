import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import BulletRouter from 'routers/BulletRouter';
import VersionRouter from 'routers/VersionRouter';
import { initWS } from 'WebSocket';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const server = app.listen(3001, () => {
    console.log('Ammo-be started & listening on port 3001');
});

initWS(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(VersionRouter);
app.use(BulletRouter);

export default server;
