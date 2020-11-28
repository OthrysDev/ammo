import React, { ReactElement } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import ReconnectionToast from 'components/ReconnectionToast';
import { RootReducer } from 'redux/reducers';
import { useSelector } from 'react-redux';

const Home = (): ReactElement => {
    const connected = useSelector((state: RootReducer) => state.ws.connected);

    return (
        <>
            <Layout>
                <MainPannel />
            </Layout>

            {!connected && <ReconnectionToast />}
        </>
    );
};

export default Home;
