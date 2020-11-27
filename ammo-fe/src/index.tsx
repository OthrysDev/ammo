import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import store from 'redux/store';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from 'material/Theme';
import I18nProvider from 'redux/I18nProvider';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <ErrorBoundary>
                            <App />
                        </ErrorBoundary>
                    </CssBaseline>
                </ThemeProvider>
            </I18nProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

/* If Cypress is running, expose the redux store do we can manipulate in inside Cypress */
// @ts-ignore
if (window.Cypress) {
    // @ts-ignore
    window.store = store;
}

/* Is a perfermance measurement tool, refer to the doc : https://create-react-app.dev/docs/measuring-performance/
    Can be useful to gather some client related metrics, need to pass a function
*/
reportWebVitals();
