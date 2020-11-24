import urlRegex from 'utils/validationUtils/validationUtils';

describe('Email validation regex', () => {
    it('Is a valid email', () => {
        expect(urlRegex.test('http://localhost:3000/user')).toBe(true);
    });

    it('Is not a valid email', () => {
        expect(urlRegex.test('AfakeUrlWhosGonnaMiss')).toBe(false);
    });

    it('Is not a valid email', () => {
        expect(urlRegex.test('http://')).toBe(false);
    });
});
