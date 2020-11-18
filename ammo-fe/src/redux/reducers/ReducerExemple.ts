type CustomReducerAction = {
    type: 'incremented' | 'decremented';
};

export type CustomReducerState = {
    value: number;
};

export default function customReducer(
    state = { value: 0 },
    action: CustomReducerAction
): CustomReducerState {
    switch (action.type) {
        case 'incremented':
            return { value: state.value + 1 };
        case 'decremented':
            return { value: state.value - 1 };
        default:
            return state;
    }
}
