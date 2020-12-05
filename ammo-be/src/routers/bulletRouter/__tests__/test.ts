import app from 'index';
import request from 'supertest';
import MockDate from 'mockdate';
import {
    connectorRequestMock,
    noMethodConnectorRequestMock,
    heavyConnectorRequestMock,
    invalidUrlConnectorRequestMock,
    minimalConnectorRequestMock,
} from 'routers/bulletRouter/__tests__/mocks/ConnectorRequest.mock';

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

jest.mock('nanoid', () => ({
    nanoid: (): string => 'AMockedNanoId',
}));

beforeAll(() => {
    MockDate.set(new Date('2020-10-10 10:00:00'));
});

afterAll(() => {
    MockDate.reset();
    app.close();
});

describe('Testing endpoints', () => {
    test('Send correct data', async () => {
        await request(app)
            .post('/')
            .send({ data: connectorRequestMock })
            .expect(200)
            .expect((r) => {
                const { bullet } = r.body;
                expect(bullet).toMatchSnapshot();
            });
    });

    test('Send minimal data', async () => {
        await request(app)
            .post('/')
            .send({ data: minimalConnectorRequestMock })
            .expect(200)
            .expect((r) => {
                const { bullet } = r.body;
                expect(bullet).toMatchSnapshot();
            });
    });

    it('Send incorrect data with missing method - Joi must throw error as method is missing', async () => {
        await request(app)
            .post('/')
            .send({ data: noMethodConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain('\\"method\\" is required');
            });
    });

    it('Send a heavy payload - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: heavyConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toMatchSnapshot();
            });
    });

    it('Send an invalid url - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: invalidUrlConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toMatchSnapshot();
            });
    });
});
