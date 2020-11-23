import express from 'express';
import bodyParser from 'body-parser';

import { Bullet } from 'shared/typings/Bullet';
import bulletSchema from 'validators/bulletValidator';
import io from 'socket.io';
import cors from 'cors';

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

app.post(
    '/',
    (req, res): express.Response => {
        try {
            const potentialBullet: Bullet = { ...req.body.data };

            const { error, value } = bulletSchema.validate(potentialBullet);
            if (error) throw new Error(error.details[0].message);

            ioServer.emit('bullet', { bullet: value });

            return res.status(200).json({ bullet: potentialBullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

export default server;
