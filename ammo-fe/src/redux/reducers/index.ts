import { combineReducers } from 'redux';
import i18nReducer, {
    ReducerState as i18nState,
} from 'redux/reducers/i18nReducer';
import webSocketReducer, {
    WebSocketReducerState,
} from 'redux/reducers/webSocketReducer';
import customReducer, {
    CustomReducerState,
} from 'redux/reducers/ReducerExemple';

export interface RootReducer {
    i18n: i18nState;
    custom: CustomReducerState;
    ws: WebSocketReducerState;
}

export default combineReducers({
    i18n: i18nReducer,
    custom: customReducer,
    ws: webSocketReducer,
});
