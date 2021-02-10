import express from 'express';
import { ioServer, getIsSubscribedToBullets } from 'WebSocket/index';
import bulletSchema from 'validators/BulletValidator';
import Bullet from 'shared/types/Bullet';
import { nanoid } from 'nanoid';
import { ConnectorRequest } from 'types/ConnectorRequest';
import WSBulletsEvent from 'shared/types/WSBulletsEvent';

const BulletRouter = express.Router();

BulletRouter.post(
    '/',
    (req, res): express.Response => {
        try {
            const connectorRequest: ConnectorRequest = { ...req.body.data };

            const { error, value } = bulletSchema.validate(connectorRequest);
            if (error) throw new Error(error.details[0].message);

            if (!getIsSubscribedToBullets()) {
                return res.status(200).json({
                    message: 'The recorder is paused',
                });
            }

            const bullet: Bullet = {
                ...value,
                date: new Date(),
                id: nanoid(),
            };

            ioServer.emit(WSBulletsEvent.EMIT, { bullet });

            return res.status(200).json({ bullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

export default BulletRouter;
