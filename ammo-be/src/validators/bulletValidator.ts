import Joi from 'joi';
import { isValidUrl, hasValidWeight } from 'utils/validationUtils';

const bulletSchema = Joi.object({
    url: Joi.string().regex(isValidUrl).required(),
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
        body: Joi.custom(hasValidWeight),
    }),
    response: Joi.object().keys({
        headers: Joi.object().unknown().required(),
        body: Joi.custom(hasValidWeight),
        status: Joi.number().required(),
    }),
});

export default bulletSchema;
