import React from 'react';
import I18nProvider from 'redux/I18nProvider';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from 'redux/store';
import theme from 'material/Theme';

// Needed so that 'fixed' elements work properly : https://github.com/storybookjs/storybook/issues/8011#issuecomment-557016621
const styles = {
    transform: 'scale(1)',
    height: '100vh',
};

addDecorator((story) => (
    <Provider store={store}>
        <I18nProvider
            onError={() => {
                /** Ignore i18n errors during tests */
            }}
        >
            <ThemeProvider theme={theme}>
                <div style={styles}>{story()}</div>
            </ThemeProvider>
        </I18nProvider>
    </Provider>
));

const customViewports = {
    iPhone5Ver: {
        name: 'iPhone 5/SE - vertical',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    viewport: {
        viewports: customViewports,
    },
};
