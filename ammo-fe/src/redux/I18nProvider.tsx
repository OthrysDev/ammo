import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootReducer } from './reducers';

const I18nProvider = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const language = useSelector((state: RootReducer) => state.i18n.language);
    const messages = useSelector((state: RootReducer) => state.i18n.messages);

    return (
        <IntlProvider messages={messages} locale={language} defaultLocale="en">
            {children}
        </IntlProvider>
    );
};

export default I18nProvider;
