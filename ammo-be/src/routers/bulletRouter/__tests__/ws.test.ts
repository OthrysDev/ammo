import app from 'index';
import request from 'supertest';
import { Bullet } from 'shared/types/Bullet';
import { io, Socket } from 'socket.io-client';
import MockDate from 'mockdate';
import {
    connectorRequestMock,
    incorrectConnectorRequestMock,
} from 'shared/mocks/ConnectorRequest';

let socket: Socket;

jest.mock('nanoid', () => ({
    nanoid: (): string => 'AMockedNanoId',
}));

beforeAll((done) => {
    MockDate.set(new Date('2020-10-10 10:00:00'));

    try {
        // Simulate a client connecting to our socket
        socket = io('http://localhost:3001');

        socket.on('connect', done);
    } catch (error) {
        // Keep the console.log for debugging purpose
        console.log('error', error);
        done();
    }
});

afterAll((done) => {
    app.close();

    if (socket.connected) socket.disconnect();

    MockDate.reset();

    done();
});

afterEach(() => {
    socket.offAny();
});

describe('Testing WebSockets', () => {
    it('Socket mut be connected properly', (done) => {
        expect(socket.connected).toBe(true);

        done();
    });

    it('Make an API call, the WebSocket must trigger and return a bullet', async (done) => {
        socket.on('bullet', ({ bullet }: Record<string, Bullet>) => {
            expect(bullet).toMatchSnapshot();
            done();
        });

        await request(app)
            .post('/')
            .send({ data: connectorRequestMock })
            .expect(200);
    });

    it('Make an API call with an incorrect mock - Should catch error', async (done) => {
        socket.on('bullet', () => {
            done.fail('Should not catch a bullet as the data is incorrect.');
        });

        await request(app)
            .post('/')
            .send({ data: incorrectConnectorRequestMock })
            .expect(400);

        done();
    });
});
