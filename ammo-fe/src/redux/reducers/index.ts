import { combineReducers } from 'redux';
import i18nReducer, {
    ReducerState as i18nState,
} from 'redux/reducers/i18nReducer';
import webSocketReducer, {
    WebSocketReducerState,
} from 'redux/reducers/webSocketReducer';
import bulletReducer, {
    BulletReducerState,
} from 'redux/reducers/bulletReducer';
import uiReducer, { UIReducerState } from 'redux/reducers/uiReducer';

export interface RootReducer {
    i18n: i18nState;
    ws: WebSocketReducerState;
    bullets: BulletReducerState;
    ui: UIReducerState;
}

export default combineReducers({
    i18n: i18nReducer,
    ws: webSocketReducer,
    bullets: bulletReducer,
    ui: uiReducer,
});
