import app from 'index';
import request from 'supertest';
import { Bullet } from 'shared/types/Bullet';
import { io, Socket } from 'socket.io-client';
import MockDate from 'mockdate';
import {
    getIsSubscribedToBullets,
    addDisconnectCbk,
    ioServer,
} from 'WebSocket';
import {
    connectorRequestMock,
    noMethodConnectorRequestMock,
} from 'routers/BulletRouter/__tests__/mocks/ConnectorRequest.mock';
import WSBulletsEvent from 'shared/types/WSBulletsEvent';

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
            // By default, subscribe to bullets chan
            socket.emit(WSBulletsEvent.SUBSCRIBE, { subscribe: true }, () =>
                done()
            );
        });
    } catch (error) {
        // Keep the console.log for debugging purpose
        console.log('error', error);
        done();
    }
});

afterAll(() => {
    app.close();

    if (socket.connected) socket.disconnect();

    MockDate.reset();
});

afterEach(() => {
    // Clear emitted bullets
    socket.off(WSBulletsEvent.EMIT);
});

describe('[WS] BulletRouter', () => {
    describe('post("/")', () => {
        test('Starting the application - ws should be connected', (done) => {
            expect(socket.connected).toBe(true);

            done();
        });

        test('Sending a connectorRequest - ws should return a bullet', async (done) => {
            socket.on(
                WSBulletsEvent.EMIT,
                ({ bullet }: Record<string, Bullet>) => {
                    expect(bullet).toMatchSnapshot();
                    done();
                }
            );

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);
        });

        test('Sending an incorrect connectorRequest - ws should not return a bullet', async (done) => {
            socket.on(WSBulletsEvent.EMIT, () => {
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

    describe('post("/") - WS & subscribe state', () => {
        it('Check subscribe state - should be true as we subscribed', () => {
            expect(getIsSubscribedToBullets()).toBe(true);
        });

        it('Unsubscribing from bullet channel - subscribe state should be false', (done) => {
            socket.emit(
                WSBulletsEvent.SUBSCRIBE,
                { subscribe: false },
                (subscribed: boolean) => {
                    expect(subscribed).toBe(false);
                    expect(getIsSubscribedToBullets()).toBe(false);
                    done();
                }
            );
        });

        it('Receive a Bullet while unsubscribed - should not be emitted to front-end', async (done) => {
            const emitSpy = jest.spyOn(ioServer, 'emit');

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);

            expect(emitSpy).toBeCalledTimes(0);
            done();
        });

        it('Return a message to connector if not subscribed', async (done) => {
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

        it('Subscribe to bullets chan - subscribe state should be true', (done) => {
            socket.emit(
                WSBulletsEvent.SUBSCRIBE,
                { subscribe: true },
                (subscribed: boolean) => {
                    expect(subscribed).toBe(true);
                    expect(getIsSubscribedToBullets()).toBe(true);
                    done();
                }
            );
        });

        it('Receive a Bullet while subscribed - should be emitted to front-end', async (done) => {
            const emitSpy = jest.spyOn(ioServer, 'emit');

            await request(app)
                .post('/')
                .send({ data: connectorRequestMock })
                .expect(200);

            expect(emitSpy).toBeCalledTimes(1);
            done();
        });

        it('Disconnecting socket - subscribe state should be false', (done) => {
            addDisconnectCbk((): void => {
                expect(getIsSubscribedToBullets()).toBe(false);
                done();
            });

            socket.disconnect();
        });
    });
});
