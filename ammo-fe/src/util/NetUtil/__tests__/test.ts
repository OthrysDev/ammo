import { urlWithoutOrigin, isHttpErrorCode } from 'util/NetUtil';

describe('NetUtil', () => {
    describe('urlWithoutOrigin', () => {
        test('Feeding complex url - should return it without the origin', () => {
            const ORIGIN = 'https://somesite.com:9000';
            const PATH =
                '/foo/bar/121/baz?param1=value1&param2=value2&param3=1209';
            const FULL_URL = `${ORIGIN}${PATH}`;

            const res = urlWithoutOrigin(FULL_URL);

            expect(res).toEqual(PATH);
        });
    });

    describe('isHttpErrorCode', () => {
        test('Testing informative response status (lower limit) - should return false', () => {
            expect(isHttpErrorCode(100)).toEqual(false);
        });

        test('Testing informative response status (upper limit) - should return false', () => {
            expect(isHttpErrorCode(103)).toEqual(false);
        });

        test('Testing success response status (lower limit) - should return false', () => {
            expect(isHttpErrorCode(200)).toEqual(false);
        });

        test('Testing success response status (upper limit) - should return false', () => {
            expect(isHttpErrorCode(226)).toEqual(false);
        });

        test('Testing redirection response status (lower limit) - should return false', () => {
            expect(isHttpErrorCode(300)).toEqual(false);
        });

        test('Testing redirection response status (upper limit) - should return false', () => {
            expect(isHttpErrorCode(308)).toEqual(false);
        });

        test('Testing client error response status (lower limit) - should return true', () => {
            expect(isHttpErrorCode(400)).toEqual(true);
        });

        test('Testing client error response status (upper limit) - should return true', () => {
            expect(isHttpErrorCode(451)).toEqual(true);
        });

        test('Testing server error response status (lower limit) - should return true', () => {
            expect(isHttpErrorCode(500)).toEqual(true);
        });

        test('Testing server error response status (upper limit) - should return true', () => {
            expect(isHttpErrorCode(511)).toEqual(true);
        });
    });
});
