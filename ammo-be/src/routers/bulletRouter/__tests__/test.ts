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

describe('BulletRouter', () => {
    describe('post("/")', () => {
        test('Sending a valid connectorRequest - should respond with valid bullet', async () => {
            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200)
                .expect((r) => {
                    const { bullet } = r.body;
                    expect(bullet).toMatchSnapshot();
                });
        });

        test('Send a minimal connectorRequest - should respond with a valid, minimal bullet', async () => {
            await request(app)
                .post('/')
                .send({ data: minimalConnectorRequestMock })
                .expect(200)
                .expect((r) => {
                    const { bullet } = r.body;
                    expect(bullet).toMatchSnapshot();
                });
        });

        test('Send an invalid connectorRequest with missing method - Joi should throw', async () => {
            await request(app)
                .post('/')
                .send({ data: noMethodConnectorRequestMock })
                .expect(400)
                .expect((r: HTTPError) => {
                    expect(r.error.text).toContain('\\"method\\" is required');
                });
        });

        test('Send an invalid connectorRequest with a heavy payload - Joi should throw', async () => {
            await request(app)
                .post('/')
                .send({ data: heavyConnectorRequestMock })
                .expect(400)
                .expect((r: HTTPError) => {
                    expect(r.error.text).toMatchSnapshot();
                });
        });

        test('Send a connectorRequest with an invalid url - Joi should throw', async () => {
            await request(app)
                .post('/')
                .send({ data: invalidUrlConnectorRequestMock })
                .expect(400)
                .expect((r: HTTPError) => {
                    expect(r.error.text).toMatchSnapshot();
                });
        });
    });
});
