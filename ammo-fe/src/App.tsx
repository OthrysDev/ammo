import React, { ReactElement, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import {
    generateMockBullet,
    generateMockBullets,
} from 'components/Bullet/__stories__/mocks/IBullet.mock';
import IBullet from 'imported/IBullet';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterFallback from 'RouterFallback';

let i = 0;

function App(): ReactElement {
    const [bullets, setBullets] = useState<IBullet[]>([]);

    useEffect(() => {
        setInterval(
            () =>
                setBullets((prevState) => [
                    ...prevState,
                    generateMockBullet(i++),
                ]),
            1000
        );
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <MainPannel bullets={bullets} />
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
