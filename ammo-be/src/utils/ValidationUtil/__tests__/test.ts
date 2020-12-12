import { isValidUrl, hasValidWeight } from 'utils/ValidationUtil';

describe('ValidationUtil', () => {
    describe('URL validation regex', () => {
        test('Feeding a valid URL - should return URL', () => {
            const url = 'http://localhost:3000/user';
            expect(isValidUrl(url)).toBe(url);
        });

        test('Feeding an invalid URL (random string) - should throw', () => {
            expect(() => isValidUrl('AnInvalidUrl')).toThrow();
        });

        test('Feeding an invalid URL (protocol only) - should throw', () => {
            expect(() => isValidUrl('http://')).toThrow();
        });
    });

    describe('Object size validation', () => {
        test('Feeding a valid sized string - should return string', () => {
            expect(hasValidWeight('A not so long string')).toMatchSnapshot();
        });

        test('Feeding an oversized string - should throw', () => {
            expect(() => hasValidWeight('a'.repeat(25001))).toThrow();
        });
    });
});
