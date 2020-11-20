//* Replace by the real webSocket
import socket from 'mocks/webSocketMock';
import { Bullet } from 'typings/Bullet';

type WebSocketMockReducerAction = {
    type: 'disconnect' | 'receivedBullet';
    bullet: Bullet;
};

export type WebSocketMockReducerState = {
    connected: boolean;
    bullets: Bullet[];
};

export default function webSocketMockReducer(
    state = { connected: socket.connected, bullets: [] },
    action: WebSocketMockReducerAction
): WebSocketMockReducerState {
    switch (action.type) {
        case 'receivedBullet':
            socket.emit('bullet', action.bullet);
            return { ...state, bullets: [...state.bullets, action.bullet] };
        case 'disconnect':
            socket.disconnect();
            return { ...state, connected: socket.connected };
        default:
            return state;
    }
}
