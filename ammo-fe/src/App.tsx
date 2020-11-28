import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterFallback from 'RouterFallback';
import useWS from 'hooks/useWS';
import Home from 'pages/Home';

const App = (): ReactElement => {
    useWS();

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <RouterFallback />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
