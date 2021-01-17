export enum UIReducerActionType {
    CHANGE_MAIN_SELECTED_PANNEL = 'CHANGE_MAIN_SELECTED_PANNEL',
    TOGGLE_REC_BTN = 'TOGGLE_REC_BTN',
}

export enum MainPannelView {
    BULLETS = 'BULLETS',
    SCRIPTS = 'SCRIPTS',
}

type UIReducerAction = {
    type: UIReducerActionType;
    view: MainPannelView;
    recBtnToggled?: boolean;
};

export type UIReducerState = {
    view: MainPannelView;
    recBtnToggled: boolean;
};

export default function uiReducer(
    state = { view: MainPannelView.BULLETS, recBtnToggled: true },
    action: UIReducerAction
): UIReducerState {
    switch (action.type) {
        case UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL:
            return { ...state, view: action.view };
        case UIReducerActionType.TOGGLE_REC_BTN:
            return { ...state, recBtnToggled: action.recBtnToggled };
        default:
            return state;
    }
}
