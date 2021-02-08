import GatlingScripter from 'scripters/GatlingScripter';
import Bullet from 'shared/types/Bullet';
import {
    bulletMock,
    xmlBulletMock,
    minimalBulletMock,
} from 'shared/mocks/Bullet.mock';

describe('GatlingScripter', () => {
    describe('script', () => {
        test('Feeding a valid bullet - should return a valid Scala / Gatling script', () => {
            expect(GatlingScripter.script(1, bulletMock)).toMatchSnapshot();
        });

        test('Feeding a valid bullet with a null body - should return a valid Scala / Gatling script with no body', () => {
            expect(
                GatlingScripter.script(1, minimalBulletMock)
            ).toMatchSnapshot();
        });

        test('Feeding a valid bullet with XML bodies - should return a valid Scala / Gatling script', () => {
            expect(GatlingScripter.script(1, xmlBulletMock)).toMatchSnapshot();
        });
    });

    describe('varName', () => {
        test('Feeding a valid bullet - should return a var name from bullet url', () => {
            const bullet = {
                url: 'http://google.com/user/foo',
                method: 'GET',
            };
            expect(
                GatlingScripter.varName(1, (bullet as unknown) as Bullet)
            ).toEqual('get_user_1');
        });

        test('Feeding a valid bullet with explicit port within the URL - should return a var name from bullet url', () => {
            const bullet = {
                url: 'http://google.com:3000/user',
                method: 'POST',
            };
            expect(
                GatlingScripter.varName(2, (bullet as unknown) as Bullet)
            ).toEqual('post_user_2');
        });

        test('Feeding a valid bullet with params within the URL - should return a var name from bullet url', () => {
            const bullet = {
                url: 'http://google.com/object/foo/10/bar/340',
                method: 'DELETE',
            };
            expect(
                GatlingScripter.varName(3, (bullet as unknown) as Bullet)
            ).toEqual('delete_object_3');
        });

        test('Feeding a valid bullet with port & params within the URL - should return a var name from bullet url', () => {
            const bullet = {
                url: 'http://google.com:8888/object/foo/10/bar/340',
                method: 'PUT',
            };
            expect(
                GatlingScripter.varName(4, (bullet as unknown) as Bullet)
            ).toEqual('put_object_4');
        });

        test('Feeding a valid bullet with port & params & query params within the URL - should return a var name from bullet url', () => {
            const bullet = {
                url:
                    'http://google.com:8888/object/foo/10/bar/340?baz=buzz&dog=cat',
                method: 'PATCH',
            };
            expect(
                GatlingScripter.varName(5, (bullet as unknown) as Bullet)
            ).toEqual('patch_object_5');
        });

        test('Feeding a valid bullet shortest URL - should return a var name from bullet url', () => {
            const bullet = {
                url: 'http://google.com',
                method: 'OPTIONS',
            };
            expect(
                GatlingScripter.varName(6, (bullet as unknown) as Bullet)
            ).toEqual('options_6');
        });

        test('Feeding a bullet with special chars in URL - should remove them from var name', () => {
            const bullet = {
                url:
                    'https://avatars.dicebear.com/4.4/api/human/tsHF6_D5oQ.svg',
                method: 'GET',
            };
            expect(
                GatlingScripter.varName(7, (bullet as unknown) as Bullet)
            ).toEqual('get_44_7');
        });

        test('Feeding a bullet with special chars and no regular char in URL - should remove them from var name', () => {
            const bullet = {
                url: 'https://avatars.dicebear.com/#@.',
                method: 'GET',
            };
            expect(
                GatlingScripter.varName(7, (bullet as unknown) as Bullet)
            ).toEqual('get_7');
        });

        test('Feeding a bullet with a double slash in URL start - should ignore them in var name', () => {
            const bullet = {
                url: 'https://avatars.dicebear.com//api/human/tsHF6_D5oQ.svg',
                method: 'GET',
            };
            expect(
                GatlingScripter.varName(8, (bullet as unknown) as Bullet)
            ).toEqual('get_api_8');
        });

        test('Feeding a bullet with a double underscore in URL start - should ignore them in var name', () => {
            const bullet = {
                url: 'http://localhost:3000/__cypress/iframes/__all',
                method: 'GET',
            };
            expect(
                GatlingScripter.varName(9, (bullet as unknown) as Bullet)
            ).toEqual('get_cypress_9');
        });
    });

    describe('_description', () => {
        test('Feeding a valid bullet - should return a description from bullet url', () => {
            const bullet = {
                url: 'http://google.com/user/foo',
                method: 'GET',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('GET user');
        });

        test('Feeding a valid bullet with explicit port within the URL - should return a description from bullet url', () => {
            const bullet = {
                url: 'http://google.com:3000/user',
                method: 'POST',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('POST user');
        });

        test('Feeding a valid bullet with params within the URL - should return a description from bullet url', () => {
            const bullet = {
                url: 'http://google.com/object/foo/10/bar/340',
                method: 'DELETE',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('DELETE object');
        });

        test('Feeding a valid bullet with port & params within the URL - should return a description from bullet url', () => {
            const bullet = {
                url: 'http://google.com:8888/object/foo/10/bar/340',
                method: 'PUT',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('PUT object');
        });

        test('Feeding a valid bullet with port & params & query params within the URL - should return a description from bullet url', () => {
            const bullet = {
                url:
                    'http://google.com:8888/object/foo/10/bar/340?baz=buzz&dog=cat',
                method: 'PATCH',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('PATCH object');
        });

        test('Feeding a valid bullet shortest URL - should return a description from bullet url', () => {
            const bullet = {
                url: 'http://google.com',
                method: 'OPTIONS',
            };
            expect(
                GatlingScripter._description((bullet as unknown) as Bullet)
            ).toEqual('OPTIONS');
        });
    });

    describe('_reqHeaders', () => {
        test('Feeding a valid bullet with one header - should return an array of a single scala-stringified header', () => {
            const bullet = {
                request: {
                    headers: {
                        param1: 'value1',
                    },
                },
            };
            expect(
                GatlingScripter._reqHeaders((bullet as unknown) as Bullet)
            ).toEqual(['.header("param1", "value1")']);
        });

        test('Feeding a valid bullet with headers - should return an array of scala-stringified headers', () => {
            const bullet = {
                request: {
                    headers: {
                        param1: 'value1',
                        param2: 'value2',
                        param3: 'value3',
                    },
                },
            };
            expect(
                GatlingScripter._reqHeaders((bullet as unknown) as Bullet)
            ).toEqual([
                '.header("param1", "value1")',
                '.header("param2", "value2")',
                '.header("param3", "value3")',
            ]);
        });

        test('Feeding a valid bullet with no headers - should return an empty array', () => {
            const bullet = {
                request: {
                    headers: {},
                },
            };
            expect(
                GatlingScripter._reqHeaders((bullet as unknown) as Bullet)
            ).toEqual([]);
        });
    });

    describe('_reqBody', () => {
        test('Feeding a valid bullet - should return the scripted body', () => {
            expect(GatlingScripter._reqBody(bulletMock)).toMatchSnapshot();
        });

        test('Feeding a valid bullet with no request body - should return null', () => {
            expect(GatlingScripter._reqBody(minimalBulletMock)).toEqual(null);
        });

        test('Feeding a valid bullet with a non-JSON body - should return raw body', () => {
            expect(GatlingScripter._reqBody(xmlBulletMock)).toMatchSnapshot();
        });
    });
});
