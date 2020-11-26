import React, { ReactElement } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterFallback from 'RouterFallback';

function App(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <MainPannel />
                    </Layout>
                </Route>
                <Route path="*">
                    <RouterFallback />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
