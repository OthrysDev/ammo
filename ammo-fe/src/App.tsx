import React, { ReactElement, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import MainPannel from 'components/MainPannel';
import {
    generateMockBullet,
    generateMockBullets,
} from 'components/Bullet/__stories__/mocks/IBullet.mock';
import IBullet from 'imported/IBullet';

let i = 0;

function App(): ReactElement {
    const [bullets, setBullets] = useState<IBullet[]>([]);
    // useEffect(() => {
    //     setInterval(
    //         () =>
    //             setBullets((prevState) => [
    //                 ...prevState,
    //                 generateMockBullet(i++),
    //             ]),
    //         3000
    //     );
    // }, []);
    return (
        <Layout>
            <MainPannel bullets={bullets} />
        </Layout>
    );
}

export default App;
