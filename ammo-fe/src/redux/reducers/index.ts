import { combineReducers } from 'redux';
import i18nReducer, {
    ReducerState as i18nState,
} from 'redux/reducers/i18nReducer';
import webSocketMockReducer, {
    WebSocketMockReducerState,
} from 'redux/reducers/webSocketMockReducer';
import customReducer, {
    CustomReducerState,
} from 'redux/reducers/ReducerExemple';

export interface RootReducer {
    i18n: i18nState;
    custom: CustomReducerState;
    wsMock: WebSocketMockReducerState;
}

export default combineReducers({
    i18n: i18nReducer,
    custom: customReducer,
    wsMock: webSocketMockReducer,
});
