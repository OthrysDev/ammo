import app from 'index';
import request from 'supertest';
import { Bullet } from 'shared/typings/Bullet';
import { io, Socket } from 'socket.io-client';
import { connectorMock, incorrectMock } from 'shared/mocks/Bullets';

let socket: Socket;

beforeAll((done) => {
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
            expect(bullet).toMatchObject(connectorMock);

            done();
        });

        await request(app).post('/').send({ data: connectorMock }).expect(200);
    });

    it('Make an API call, the WebSocket must trigger and return a bullet', async (done) => {
        socket.on('bullet', () => {
            done.fail('Should not catch a bullet as the data is incorrect.');
        });

        await request(app).post('/').send({ data: incorrectMock }).expect(400);
        done();
    });
});
