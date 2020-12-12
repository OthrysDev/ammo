export enum WebSocketReducerActionType {
    CONNECTED = 'CONNECTED',
    DISCONNECTED = 'DISCONNECTED',
}

type WebSocketReducerAction = {
    type: WebSocketReducerActionType;
    connected: boolean;
};

export type WebSocketReducerState = {
    connected: boolean;
};

export default function webSocketReducer(
    state = { connected: false },
    action: WebSocketReducerAction
): WebSocketReducerState {
    switch (action.type) {
        case WebSocketReducerActionType.CONNECTED:
            return { ...state, connected: true };
        case WebSocketReducerActionType.DISCONNECTED:
            return { ...state, connected: false };
        default:
            return state;
    }
}
