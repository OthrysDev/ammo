import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
    const language = useSelector((state: RootReducer) => state.i18n.language);
    const messages = useSelector((state: RootReducer) => state.i18n.messages);

    return (
        <IntlProvider messages={messages} locale={language} defaultLocale="en">
            {children}
        </IntlProvider>
    );
};

export default I18nProvider;
