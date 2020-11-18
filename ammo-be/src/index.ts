import express from 'express';
import bodyParser from 'body-parser';

import { Bullet } from 'typings/Connector';
import bulletSchema from 'validators/bulletValidator';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post(
    '/',
    (req, res): express.Response => {
        try {
            const potentialBullet: Bullet = { ...req.body.data };

            const { error } = bulletSchema.validate(potentialBullet);
            if (error) throw new Error(error.details[0].message);

            return res.status(200).json({ bullet: potentialBullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

const server = app.listen(port);

export default server;
