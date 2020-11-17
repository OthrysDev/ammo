import React, { ReactElement } from 'react';
import Layout from 'layout/Layout';
import MainPannel from 'layout/MainPannel';

function App(): ReactElement {
    return (
        <Layout>
            <MainPannel />
        </Layout>
    );
}

export default App;
