import app from 'index';
import request from 'supertest';
import {
    connectorMock,
    incorrectMock,
    overweightedMock,
    nonValidUrlMock,
    almostValidUrlMock,
    almostValidUrlMock2,
} from 'tests/mocks/Bullets';

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
                expect(bullet).toMatchObject(connectorMock);
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
                expect(r.error.text).toContain(
                    '"\\"url\\" with value \\"AfakeUrlWhosGonnaMiss\\" fails to match the required pattern'
                );
            });
    });

    it('Send an almost nice url - Joi must throw error as a slash is missing', async () => {
        await request(app)
            .post('/')
            .send({ data: almostValidUrlMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain(
                    '"\\"url\\" with value \\"http:/google.com\\" fails to match the required pattern'
                );
            });
    });

    it('Send another almost nice url - Joi must throw error as there is nothing after the slash', async () => {
        await request(app)
            .post('/')
            .send({ data: almostValidUrlMock2 })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain(
                    '"\\"url\\" with value \\"http://\\" fails to match the required pattern'
                );
            });
    });
});