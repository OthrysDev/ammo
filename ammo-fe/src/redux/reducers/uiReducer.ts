export enum UIReducerActionType {
    CHANGE_MAIN_SELECTED_PANNEL = 'CHANGE_MAIN_SELECTED_PANNEL',
    TOGGLE_RECORD = 'TOGGLE_RECORD',
}

export enum MainPannelView {
    BULLETS = 'BULLETS',
    SCRIPTS = 'SCRIPTS',
}

type UIReducerAction = {
    type: UIReducerActionType;
    view: MainPannelView;
    recording?: boolean;
};

export type UIReducerState = { view: MainPannelView; recording: boolean };

export default function uiReducer(
    state = { view: MainPannelView.BULLETS, recording: true },
    action: UIReducerAction
): UIReducerState {
    switch (action.type) {
        case UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL:
            return { ...state, view: action.view };
        case UIReducerActionType.TOGGLE_RECORD:
            return { ...state, recording: action.recording };
        default:
            return state;
    }
}
