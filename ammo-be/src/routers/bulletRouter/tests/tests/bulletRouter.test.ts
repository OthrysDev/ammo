import app from 'index';
import request from 'supertest';
import {
    connectorMock,
    incorrectMock,
    overweightedMock,
    nonValidUrlMock,
} from 'shared/mocks/Bullets';

interface HTTPError {
    error: {
        name: string;
        message: string;
        stack?: string;
        status: number;
        text: string;
        method: string;
        path: string;
    };
}

afterAll(() => {
    app.close();
});

describe('Testing endpoints', () => {
    test('Send correct data', async () => {
        await request(app)
            .post('/')
            .send({ data: connectorMock })
            .expect(200)
            .expect((r) => {
                const { bullet } = r.body;
                expect(bullet).toMatchSnapshot();
            });
    });

    it('Send incorrect data - Joi must throw error as method is missing', async () => {
        await request(app)
            .post('/')
            .send({ data: incorrectMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain('\\"method\\" is required');
            });
    });

    it('Send an overweighted body - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: overweightedMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain(
                    '\\"request.body\\" failed custom validation because your body is too heavy, max 50Ko"'
                );
            });
    });

    it('Send a fake url - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: nonValidUrlMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toMatchSnapshot();
            });
    });
});
