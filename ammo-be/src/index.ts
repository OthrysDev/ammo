import express from 'express';
import bodyParser from 'body-parser';
import Config from 'util/Config';

import cors from 'cors';
import BulletRouter from 'routers/BulletRouter';
import VersionRouter from 'routers/VersionRouter';
import { initWS } from 'WebSocket';

const app = express();

app.use(cors({ origin: Config.feUrl }));

const server = app.listen(Config.port, () => {
    console.log(`Ammo-be started & listening on port ${Config.port}`);
});

initWS(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(VersionRouter);
app.use(BulletRouter);

export default server;
