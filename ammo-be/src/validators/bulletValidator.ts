import Joi from 'joi';
import { isValidUrl, hasValidWeight } from 'utils/ValidationUtil';

const bulletSchema = Joi.object({
    url: Joi.string().custom(isValidUrl).message('url is invalid').required(),
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
        body: Joi.custom(hasValidWeight).message(
            'request body is too heavy (50 Ko max)'
        ),
    }),
    response: Joi.object().keys({
        headers: Joi.object().unknown().required(),
        body: Joi.custom(hasValidWeight).message(
            'response body is too heavy (50 Ko max)'
        ),
        status: Joi.number(),
    }),
});

export default bulletSchema;
