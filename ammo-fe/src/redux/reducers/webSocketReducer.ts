import { Bullet } from 'shared/typings/Bullet';

type WebSocketReducerAction = {
    type: 'CONNECTED' | 'DISCONNECTED' | 'RECEIVED_BULLET';
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
        case 'RECEIVED_BULLET':
            return { ...state, bullets: [...state.bullets, action.bullet] };
        case 'CONNECTED':
            return { ...state, connected: true };
        case 'DISCONNECTED':
            return { ...state, connected: false };
        default:
            return state;
    }
}
