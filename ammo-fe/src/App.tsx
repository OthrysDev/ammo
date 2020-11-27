import * as React from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterFallback from 'RouterFallback';
import useWS from 'hook/useWS';

function App(): React.ReactElement {
    useWS();

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
