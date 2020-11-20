import englishMessages from 'i18n/en';
// import frenchMessages from 'i18n/fr';

const getMessages = (language: string) => {
    // if (language === 'fr') return frenchMessages;
    // else
    return englishMessages;
};

const getLanguage = () => {
    // I18n config. By default, as long as we don't have the user's preferences, check the browser lang and stick to it
    let language = navigator.language || navigator.languages[0];

    // Default language is english
    if (language === undefined || language === null) language = 'en_EN';

    // Remove the region code
    return language.toLowerCase().split(/[_-]+/)[0];
};

type AcceptedLanguages = /** 'fr' | */ 'en';

type ReducerAction = {
    type: AcceptedLanguages;
};

export type ReducerState = {
    messages: Record<string, string>;
    language: string;
};

export default function i18nReducer(
    state = { messages: getMessages(getLanguage()), language: getLanguage() },
    action: ReducerAction
): ReducerState {
    switch (action.type) {
        // case 'fr':
        //     return { messages: getMessages('fr'), language: 'fr' };
        case 'en':
        default:
            return { messages: getMessages('en'), language: 'en' };
    }
}
