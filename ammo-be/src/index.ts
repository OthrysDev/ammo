import express from 'express';
import bodyParser from 'body-parser';
import Joi from 'joi';
import Sizeof from 'object-sizeof';

import { Bullet } from 'typings/Connector';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post(
    '/',
    (req, res): express.Response => {
        try {
            const potentialBullet: Bullet = { ...req.body.data };

            const urlRegex = new RegExp(
                /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
            );

            const customBodyLengthValidation = (value: string): string => {
                // Sizeof calculations of bytes based
                const requestBodySize = Sizeof(value);

                // Arbitrary value of 50ko
                if (requestBodySize > 50000) {
                    throw new Error('your body is too heavy, max 100Ko');
                }
                return value;
            };

            const schema = Joi.object({
                url: Joi.string().regex(urlRegex).required(),
                method: Joi.string()
                    .valid(
                        ...[
                            'GET',
                            'PUT',
                            'POST',
                            'DELETE',
                            'HEAD',
                            'CONNECT',
                            'OPTIONS',
                            'TRACE',
                            'PATCH',
                        ]
                    )
                    .required(),
                request: Joi.object().keys({
                    headers: Joi.object().unknown(),
                    body: Joi.custom(customBodyLengthValidation),
                }),
                response: Joi.object().keys({
                    headers: Joi.object().unknown().required(),
                    body: Joi.custom(customBodyLengthValidation),
                    status: Joi.number().required(),
                }),
            });

            const { error } = schema.validate(potentialBullet);
            if (error) throw new Error(error.details[0].message);

            return res.status(200).json({ bullet: potentialBullet });
        } catch ({ message }) {
            return res.status(400).json({ message });
        }
    }
);

const server = app.listen(port);

export default server;
