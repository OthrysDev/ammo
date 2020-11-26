type WebSocketReducerAction = {
    type: 'CONNECTED' | 'DISCONNECTED' | 'RECEIVED_BULLET';
};

export type WebSocketReducerState = {
    connected: boolean;
};

export default function webSocketReducer(
    state = { connected: false },
    action: WebSocketReducerAction
): WebSocketReducerState {
    switch (action.type) {
        case 'CONNECTED':
            return { ...state, connected: true };
        case 'DISCONNECTED':
            return { ...state, connected: false };
        default:
            return state;
    }
}
