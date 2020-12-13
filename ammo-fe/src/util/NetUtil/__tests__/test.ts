import urlWithoutOrigin from 'util/NetUtil';

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
});
