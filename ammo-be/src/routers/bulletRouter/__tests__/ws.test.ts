import app from 'index';
import request from 'supertest';
import { Bullet } from 'shared/types/Bullet';
import { io, Socket } from 'socket.io-client';
import MockDate from 'mockdate';
import { getIsSubbedToBullets, addDisconnectCbk, ioServer } from 'WebSocket';
import {
    connectorRequestMock,
    noMethodConnectorRequestMock,
} from 'routers/BulletRouter/__tests__/mocks/ConnectorRequest.mock';

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
    app.close();

    if (socket.connected) socket.disconnect();

    MockDate.reset();

    done();
});

afterEach(() => {
    // Clear emitted bullets
    socket.off('bullets::emit');
});

describe('[WS] BulletRouter', () => {
    describe('post("/")', () => {
        test('Starting the application - ws should be connected', (done) => {
            expect(socket.connected).toBe(true);

            done();
        });

        test('Sending a connectorRequest - ws should return a bullet', async (done) => {
            socket.on('bullets::emit', ({ bullet }: Record<string, Bullet>) => {
                expect(bullet).toMatchSnapshot();
                done();
            });

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);
        });

        test('Sending an incorrect connectorRequest - ws should not return a bullet', async (done) => {
            socket.on('bullets::emit', () => {
                done.fail(
                    'Should not catch a bullet as the data is incorrect.'
                );
            });

            await request(app)
                .post('/')
                .send({ data: noMethodConnectorRequestMock })
                .expect(400);

            done();
        });
    });

    describe('isSubbedToBullets', () => {
        it('Check recording value - should be true as we subbed', () => {
            expect(getIsSubbedToBullets()).toBe(true);
        });

        it('Unsubbing from bullet channel - sub state should be false', (done) => {
            socket.emit('bullets::sub', { sub: false }, (subbed: boolean) => {
                expect(subbed).toBe(false);
                expect(getIsSubbedToBullets()).toBe(false);
                done();
            });
        });

        it('Receive a Bullet while unsubbed - should not be emitted to front-end', async (done) => {
            const emitSpy = jest.spyOn(ioServer, 'emit');

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);

            expect(emitSpy).toBeCalledTimes(0);
            done();
        });

        it('Return a message to connector if not subbed', async (done) => {
            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200)
                .expect((r) => {
                    const { message } = r.body;
                    expect(message).toMatchSnapshot();

                    done();
                });
        });

        it('Sub to bullets chan - sub state should be true', (done) => {
            socket.emit('bullets::sub', { sub: true }, (subbed: boolean) => {
                expect(subbed).toBe(true);
                expect(getIsSubbedToBullets()).toBe(true);
                done();
            });
        });

        it('Receive a Bullet while subbed - should be emitted to front-end', async (done) => {
            const emitSpy = jest.spyOn(ioServer, 'emit');

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);

            expect(emitSpy).toBeCalledTimes(1);
            done();
        });

        it('Disconnecting socket - sub state should be false', (done) => {
            addDisconnectCbk((): void => {
                expect(getIsSubbedToBullets()).toBe(false);
                done();
            });
            socket.disconnect();
        });
    });
});
