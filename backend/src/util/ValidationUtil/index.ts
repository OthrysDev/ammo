import Sizeof from 'object-sizeof';

// /!\ For Joi to work we must return the objects' values, not a boolean

const isValidUrl = (value: string): string => {
    const urlReg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;
    if (!value || !urlReg.test(value)) throw new Error('URL is not valid');

    return value;
};

const hasValidWeight = (value: string): string => {
    // Sizeof calculation of bytes based
    const size = Sizeof(value);

    // Arbitrary value of 50ko
    if (size > 50000) {
        throw new Error('Object is too heavy (50Ko max)');
    }

    return value;
};

export { isValidUrl, hasValidWeight };
