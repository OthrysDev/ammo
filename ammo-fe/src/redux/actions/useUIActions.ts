import { useDispatch } from 'react-redux';
import { MainPannelView, UIReducerActionType } from 'redux/reducers/uiReducer';

type UiActions = {
    toggleRecBtnAction: (toogled: boolean) => Record<string, unknown>;
    changeMainPannelAction: (view: MainPannelView) => Record<string, unknown>;
};

const useUIActions = (): UiActions => {
    const dispatch = useDispatch();

    const toggleRecBtnAction = (toogled: boolean): Record<string, unknown> => {
        return dispatch({
            type: UIReducerActionType.TOGGLE_REC_BTN,
            recBtnToggled: toogled,
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
        toggleRecBtnAction,
        changeMainPannelAction,
    };
};

export default useUIActions;
