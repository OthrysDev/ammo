import englishMessages from 'i18n/en';

const getMessages = (): Record<string, string> => englishMessages;

export enum AcceptedLanguages {
    EN = 'en',
}

type ReducerAction = {
    type: AcceptedLanguages;
};

export type ReducerState = {
    messages: Record<string, string>;
    language: AcceptedLanguages;
};

export default function i18nReducer(
    state = {
        messages: getMessages(),
        language: AcceptedLanguages.EN,
    },
    action: ReducerAction
): ReducerState {
    switch (action.type) {
        case AcceptedLanguages.EN:
        default:
            return { messages: state.messages, language: state.language };
    }
}
