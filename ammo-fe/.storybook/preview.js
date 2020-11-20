import React from 'react';
import I18nProvider from 'redux/I18nProvider';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from 'redux/store';
import theme from 'material/Theme';

addDecorator((story) => (
    <Provider store={store}>
        <I18nProvider>
            <ThemeProvider theme={theme}>{story()}</ThemeProvider>
        </I18nProvider>
    </Provider>
));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
};
