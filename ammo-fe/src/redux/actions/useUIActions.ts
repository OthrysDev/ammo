import { useDispatch } from 'react-redux';
import { MainPannelView, UIReducerActionType } from 'redux/reducers/uiReducer';

type UiActions = {
    toggleRecorderButtonAction: (toogled: boolean) => Record<string, unknown>;
    changeMainPannelAction: (view: MainPannelView) => Record<string, unknown>;
};

const useUIActions = (): UiActions => {
    const dispatch = useDispatch();

    const toggleRecorderButtonAction = (
        toogled: boolean
    ): Record<string, unknown> => {
        return dispatch({
            type: UIReducerActionType.TOGGLE_REC_BTN,
            recorderButtonToggled: toogled,
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
        toggleRecorderButtonAction,
        changeMainPannelAction,
    };
};

export default useUIActions;
