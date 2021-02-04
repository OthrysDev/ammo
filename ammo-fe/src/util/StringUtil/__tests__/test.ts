import { isString, isJSON } from 'util/StringUtil';

describe('StringUtil', () => {
    describe('isString', () => {
        test('Feeding a string - should return true', () => {
            expect(isString('test')).toEqual(true);
        });
        test('Feeding a number - should return false', () => {
            expect(isString(10)).toEqual(false);
        });
        test('Feeding a JSON object - should return false', () => {
            expect(isString({ foo: 'bar' })).toEqual(false);
        });
    });

    describe('isJSON', () => {
        test('Feeding a valid JSON string - should return true', () => {
            expect(isJSON('{"foo":"bar"}')).toEqual(true);
        });
        test('Feeding an invalid JSON string - should return false', () => {
            expect(isJSON('{foo:"bar"}')).toEqual(false);
        });
        test('Feeding an object - should return false', () => {
            expect(isJSON({ foo: 'bar' })).toEqual(false);
        });
        test('Feeding a random string - should return false', () => {
            expect(isJSON('foobar100')).toEqual(false);
        });
    });
});
