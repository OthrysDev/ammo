import { isValidUrl, hasValidWeight } from 'utils/validationUtils';

describe('URL validation regex', () => {
    it('Is a valid URL', () => {
        const url = 'http://localhost:3000/user';
        expect(isValidUrl(url)).toBe(url);
    });

    it('Is not a valid URL (random string)', () => {
        expect(() => isValidUrl('AnInvalidUrl')).toThrow();
    });

    it('Is not a valid URL (protocol only)', () => {
        expect(() => isValidUrl('http://')).toThrow();
    });
});

describe('Object size validation', () => {
    it('Pass a valid sized string', () => {
        expect(hasValidWeight('A not so long string')).toMatchSnapshot();
    });

    it('Pass an oversized string', () => {
        expect(() => hasValidWeight('a'.repeat(25001))).toThrow();
    });
});
