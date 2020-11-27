import express from 'express';
import { ioServer } from 'webSocket/index';
import bulletSchema from 'validators/bulletValidator';
import { Bullet } from 'shared/types/Bullet';
import { nanoid } from 'nanoid';

const bulletRouter = express.Router();

bulletRouter.post(
    '/',
    (req, res): express.Response => {
        try {
            const potentialBullet: Bullet = { ...req.body.data };

            const { error, value: bullet } = bulletSchema.validate(
                potentialBullet
            );
            if (error) throw new Error(error.details[0].message);

            ioServer.emit('bullet', { bullet });

            bullet.date = new Date();
            bullet.id = nanoid();

            return res.status(200).json({ bullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

export default bulletRouter;
