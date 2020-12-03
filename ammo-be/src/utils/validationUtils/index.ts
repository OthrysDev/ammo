import Sizeof from 'object-sizeof';

const isValidUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;

// For Joi to work we must return the object's value, not a boolean
const hasValidWeight = (value: string): string => {
    // Sizeof calculations of bytes based
    const size = Sizeof(value);

    // Arbitrary value of 50ko
    if (size > 50000) {
        throw new Error('your string is too heavy, max 50Ko');
    }

    return value;
};

export { isValidUrl, hasValidWeight };
