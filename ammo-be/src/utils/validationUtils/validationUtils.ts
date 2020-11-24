import Sizeof from 'object-sizeof';

const isValidUrl = new RegExp(
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
);

const weightValidator = (value: string): string => {
    // Sizeof calculations of bytes based
    const size = Sizeof(value);

    // Arbitrary value of 50ko
    if (size > 50000) {
        throw new Error('your string is too heavy, max 50Ko');
    }
    return value;
};

export { isValidUrl, weightValidator };
