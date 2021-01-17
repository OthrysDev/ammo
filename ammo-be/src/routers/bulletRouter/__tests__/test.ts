import app from 'index';
import request from 'supertest';
import MockDate from 'mockdate';
import {
    connectorRequestMock,
    noMethodConnectorRequestMock,
    heavyConnectorRequestMock,
    invalidUrlConnectorRequestMock,
    minimalConnectorRequestMock,
} from 'routers/BulletRouter/__tests__/mocks/ConnectorRequest.mock';
import HTTPError from 'types/HTTPError';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

jest.mock('nanoid', () => ({
    nanoid: (): string => 'AMockedNanoId',
}));

beforeAll((done) => {
    MockDate.set(new Date('2020-10-10 10:00:00'));

    try {
        // Simulate a client connecting to our socket
        socket = io('http://localhost:3001');

        socket.on('connect', () => {
            // By default, sub to bullets chan
            socket.emit('bullets::sub', { sub: true }, () => done());
        });
    } catch (error) {
        // Keep the console.log for debugging purpose
        console.log('error', error);
        done();
    }
});

afterAll((done) => {
    MockDate.reset();

    if (socket.connected) socket.disconnect();

    app.close();

    done();
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

        test('Unsub from channel - should return that recorder is paused', async () => {
            socket.emit('bullets::sub', { sub: false }, async () => {
                await request(app)
                    .post('/')
                    .send({ data: invalidUrlConnectorRequestMock })
                    .expect(400)
                    .expect((r: HTTPError) => {
                        expect(r).toMatchSnapshot();
                    });
            });
        });
    });
});
