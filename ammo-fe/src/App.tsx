import React, { ReactElement } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import {
    generateMockBullet,
    generateMockBullets,
} from 'components/Bullet/__stories__/mocks/IBullet.mock';

function App(): ReactElement {
    return (
        <Layout>
            <MainPannel bullets={generateMockBullets(10)} />
        </Layout>
    );
}

export default App;
