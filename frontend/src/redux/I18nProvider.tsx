import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';

interface I18nProviderProps {
    children: JSX.Element;
    onError?: () => void;
}

const I18nProvider = ({
    children,
    onError,
}: I18nProviderProps): JSX.Element => {
    const language = useSelector((state: RootReducer) => state.i18n.language);
    const messages = useSelector((state: RootReducer) => state.i18n.messages);

    return (
        <IntlProvider
            messages={messages}
            locale={language}
            onError={onError}
            defaultLocale="en"
        >
            {children}
        </IntlProvider>
    );
};

export default I18nProvider;
