import { createOverweight } from 'shared/mocks/Bullets';
import {
    isValidUrl,
    weightValidator,
} from 'utils/validationUtils/validationUtils';

describe('Email validation regex', () => {
    it('Is a valid email', () => {
        expect(isValidUrl.test('http://localhost:3000/user')).toBe(true);
    });

    it('Is not a valid email', () => {
        expect(isValidUrl.test('AfakeUrlWhosGonnaMiss')).toBe(false);
    });

    it('Is not a valid email', () => {
        expect(isValidUrl.test('http://')).toBe(false);
    });
});

describe('Weight validation', () => {
    it('Pass a valid sized string', () => {
        expect(weightValidator('A not so long string')).toMatchSnapshot();
    });

    it('Pass an oversized string', () => {
        expect(() => weightValidator(createOverweight())).toThrow();
    });
});
