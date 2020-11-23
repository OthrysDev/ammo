import { Bullet } from 'shared/typings/Bullet';

type WebSocketReducerAction = {
    type: 'connected' | 'disconnect' | 'receivedBullet';
    bullet?: Bullet;
};

export type WebSocketReducerState = {
    connected: boolean;
    bullets: Bullet[];
};

export default function webSocketReducer(
    state = { connected: false, bullets: [] },
    action: WebSocketReducerAction
): WebSocketReducerState {
    switch (action.type) {
        case 'receivedBullet':
            return { ...state, bullets: [...state.bullets, action.bullet] };
        case 'connected':
            return { ...state, connected: true };
        case 'disconnect':
            return { ...state, connected: false };
        default:
            return state;
    }
}
