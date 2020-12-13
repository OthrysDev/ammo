export enum UIReducerActionType {
    CHANGE_MAIN_SELECTED_PANNEL = 'CHANGE_MAIN_SELECTED_PANNEL',
}

export enum MainPannelView {
    BULLETS = 'BULLETS',
    SCRIPTS = 'SCRIPTS',
}

type UIReducerAction = {
    type: UIReducerActionType;
    view: MainPannelView;
};

export type UIReducerState = { view: MainPannelView };

export default function uiReducer(
    state = { view: MainPannelView.BULLETS },
    action: UIReducerAction
): UIReducerState {
    switch (action.type) {
        case UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL:
            return { view: action.view };
        default:
            return state;
    }
}
