import englishMessages from 'i18n/en';

const getMessages = (): Record<string, string> => englishMessages;

type AcceptedLanguages = 'en';

type ReducerAction = {
    type: AcceptedLanguages;
};

export type ReducerState = {
    messages: Record<string, string>;
    language: string;
};

export default function i18nReducer(
    state = {
        messages: getMessages(),
        language: 'en',
    },
    action: ReducerAction
): ReducerState {
    switch (action.type) {
        case 'en':
        default:
            return { messages: state.messages, language: state.language };
    }
}
