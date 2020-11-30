import app from 'index';
import request from 'supertest';
import MockDate from 'mockdate';
import {
    connectorRequestMock,
    incorrectConnectorRequestMock,
    overweightedConnectorRequestMock,
    invalidUrlConnectorRequestMock,
} from 'shared/mocks/ConnectorRequest';

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

    it('Send incorrect data - Joi must throw error as method is missing', async () => {
        await request(app)
            .post('/')
            .send({ data: incorrectConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain('\\"method\\" is required');
            });
    });

    it('Send an overweighted body - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: overweightedConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toMatchSnapshot();
            });
    });

    it('Send a fake url - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: invalidUrlConnectorRequestMock })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toMatchSnapshot();
            });
    });
});
