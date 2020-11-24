import Joi from 'joi';
import Sizeof from 'object-sizeof';
import urlRegex from 'utils/validationUtils/validationUtils';

const customBodyLengthValidation = (value: string): string => {
    // Sizeof calculations of bytes based
    const requestBodySize = Sizeof(value);

    // Arbitrary value of 50ko
    if (requestBodySize > 50000) {
        throw new Error('your body is too heavy, max 50Ko');
    }
    return value;
};

const bulletSchema = Joi.object({
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

export default bulletSchema;
