import { WebSocketReducerActionType } from 'redux/reducers/webSocketReducer';

export const connect = (): Record<string, unknown> => {
    return { type: WebSocketReducerActionType.CONNECTED };
};
export const disconnect = (): Record<string, unknown> => {
    return { type: WebSocketReducerActionType.DISCONNECTED };
};
