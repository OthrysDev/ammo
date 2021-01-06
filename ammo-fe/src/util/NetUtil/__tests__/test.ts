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
            const res = isHttpErrorCode(100);
            expect(res).toEqual(false);
        });

        test('Testing informative response status (upper limit) - should return false', () => {
            const res = isHttpErrorCode(103);
            expect(res).toEqual(false);
        });

        test('Testing success response status (lower limit) - should return false', () => {
            const res = isHttpErrorCode(200);
            expect(res).toEqual(false);
        });

        test('Testing success response status (upper limit) - should return false', () => {
            const res = isHttpErrorCode(226);
            expect(res).toEqual(false);
        });

        test('Testing redirection response status (lower limit) - should return false', () => {
            const res = isHttpErrorCode(300);
            expect(res).toEqual(false);
        });

        test('Testing redirection response status (upper limit) - should return false', () => {
            const res = isHttpErrorCode(308);
            expect(res).toEqual(false);
        });

        test('Testing client error response status (lower limit) - should return true', () => {
            const res = isHttpErrorCode(400);
            expect(res).toEqual(true);
        });

        test('Testing client error response status (upper limit) - should return true', () => {
            const res = isHttpErrorCode(451);
            expect(res).toEqual(true);
        });

        test('Testing server error response status (lower limit) - should return true', () => {
            const res = isHttpErrorCode(500);
            expect(res).toEqual(true);
        });

        test('Testing server error response status (upper limit) - should return true', () => {
            const res = isHttpErrorCode(511);
            expect(res).toEqual(true);
        });
    });
});
