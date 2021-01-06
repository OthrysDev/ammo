import { useDispatch } from 'react-redux';
import { MainPannelView, UIReducerActionType } from 'redux/reducers/uiReducer';

type UiActions = {
    toggleRecordAction: (isRecording: boolean) => Record<string, unknown>;
    changeMainPannelAction: (view: MainPannelView) => Record<string, unknown>;
};

const useUIActions = (): UiActions => {
    const dispatch = useDispatch();

    const toggleRecordAction = (
        isRecording: boolean
    ): Record<string, unknown> => {
        return dispatch({
            type: UIReducerActionType.TOGGLE_RECORD,
            recording: isRecording,
        });
    };

    const changeMainPannelAction = (
        view: MainPannelView
    ): Record<string, unknown> => {
        return dispatch({
            type: UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL,
            view,
        });
    };

    return {
        toggleRecordAction,
        changeMainPannelAction,
    };
};

export default useUIActions;
