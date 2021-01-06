import { useDispatch } from 'react-redux';
import { WebSocketReducerActionType } from 'redux/reducers/webSocketReducer';

type WsActions = {
    connectAction: () => Record<string, unknown>;
    disconnectAction: () => Record<string, unknown>;
};

const useWSActions = (): WsActions => {
    const dispatch = useDispatch();

    const connectAction = (): Record<string, unknown> => {
        return dispatch({ type: WebSocketReducerActionType.CONNECTED });
    };

    const disconnectAction = (): Record<string, unknown> => {
        return dispatch({ type: WebSocketReducerActionType.DISCONNECTED });
    };

    return {
        connectAction,
        disconnectAction,
    };
};

export default useWSActions;
