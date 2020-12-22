import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import bulletRouter from 'routers/BulletRouter';
import { initWS } from 'webSocket';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const server = app.listen(3001);

initWS(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bulletRouter);

export default server;
