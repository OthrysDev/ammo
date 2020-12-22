import { MainPannelView, UIReducerActionType } from 'redux/reducers/uiReducer';

export const toggleRecord = (isRecording: boolean): Record<string, unknown> => {
    return { type: UIReducerActionType.TOGGLE_RECORD, recording: isRecording };
};

export const changeMainPannel = (
    view: MainPannelView
): Record<string, unknown> => {
    return {
        type: UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL,
        view,
    };
};
