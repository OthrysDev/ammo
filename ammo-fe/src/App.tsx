import React, { ReactElement } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';

function App(): ReactElement {
    return (
        <Layout>
            <MainPannel />
        </Layout>
    );
}

export default App;
