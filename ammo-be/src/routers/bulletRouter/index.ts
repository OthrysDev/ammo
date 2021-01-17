import express from 'express';
import { ioServer, getIsSubbedToBullets } from 'WebSocket/index';
import bulletSchema from 'validators/BulletValidator';
import { Bullet } from 'shared/types/Bullet';
import { nanoid } from 'nanoid';
import { ConnectorRequest } from 'types/ConnectorRequest';

const BulletRouter = express.Router();

BulletRouter.post(
    '/',
    (req, res): express.Response => {
        try {
            const connectorRequest: ConnectorRequest = { ...req.body.data };

            if (!getIsSubbedToBullets()) {
                return res.status(200).json({
                    message: 'The recorder is paused',
                });
            }

            const { error, value } = bulletSchema.validate(connectorRequest);
            if (error) throw new Error(error.details[0].message);

            const bullet: Bullet = {
                ...value,
                date: new Date(),
                id: nanoid(),
            };

            ioServer.emit('bullets::emit', { bullet });

            return res.status(200).json({ bullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

export default BulletRouter;
