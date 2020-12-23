import { useDispatch } from 'react-redux';
import { addBullet } from 'redux/actions/bulletActions';
import { changeMainPannel, toggleRecord } from 'redux/actions/uiActions';
import { MainPannelView } from 'redux/reducers/uiReducer';
import { Bullet } from 'shared/types/Bullet';
import { connect, disconnect } from 'redux/actions/wsActions';

type UiActions = {
    toggleRecordAction: (isRecording: boolean) => Record<string, unknown>;
    changeMainPannelAction: (view: MainPannelView) => Record<string, unknown>;
};

type BulletActions = {
    addBulletAction: (bullet: Bullet) => Record<string, unknown>;
};

type WsActions = {
    connectAction: () => Record<string, unknown>;
    disconnectAction: () => Record<string, unknown>;
};

type Actions = {
    ui: UiActions;
    bullets: BulletActions;
    ws: WsActions;
};

const useActions = (): Actions => {
    const dispatch = useDispatch();

    /* 
    Each functions is responsible for binding the actions with the dispatch.
    We avoided creating the actions here to reduce the amount of code, make it more readable,
    and separate the concerns.
    */

    const uiActions = (): UiActions => {
        const toggleRecordAction = (
            isRecording: boolean
        ): Record<string, unknown> => {
            return dispatch(toggleRecord(isRecording));
        };

        const changeMainPannelAction = (
            view: MainPannelView
        ): Record<string, unknown> => {
            return dispatch(changeMainPannel(view));
        };

        return {
            toggleRecordAction,
            changeMainPannelAction,
        };
    };

    const bulletActions = (): BulletActions => {
        const addBulletAction = (bullet: Bullet): Record<string, unknown> => {
            return dispatch(addBullet(bullet));
        };

        return {
            addBulletAction,
        };
    };

    const wsActions = (): WsActions => {
        const connectAction = (): Record<string, unknown> => {
            return dispatch(connect());
        };

        const disconnectAction = (): Record<string, unknown> => {
            return dispatch(disconnect());
        };

        return {
            connectAction,
            disconnectAction,
        };
    };

    return {
        ui: uiActions(),
        bullets: bulletActions(),
        ws: wsActions(),
    };
};

export default useActions;
