import React, { ReactElement, useState, useEffect } from 'react';
import 'simplebar/dist/simplebar.min.css';
import useMQ from 'hooks/useMQ';
import MobileMainPannel from 'components/MainPannel/MobileMainPannel';
import DesktopMainPannel from 'components/MainPannel/DesktopMainPannel';
import {
    bulletMock,
    xmlBulletMock,
    minimalBulletMock,
} from 'shared/mocks/Bullet.mock';

// /!\ THIS COMPONENT IS FOR TEST PURPOSES ONLY!!!

let i = 0;
let intervalId = null;
const mocks = [bulletMock, xmlBulletMock, minimalBulletMock];

const TestMainPannel = (): ReactElement => {
    const { isSMDown } = useMQ();

    // For tests
    const [bullets, setBullets] = useState([]);
    useEffect(() => {
        intervalId = setInterval(() => {
            setBullets((preBullets) => [
                ...preBullets,
                { ...mocks[i % 3], id: i },
            ]);

            i += 1;

            if (i >= 10) clearInterval(intervalId);
        }, 300);

        return (): void => clearInterval(intervalId);
    }, []);

    return isSMDown ? (
        <MobileMainPannel bullets={bullets} />
    ) : (
        <DesktopMainPannel bullets={bullets} />
    );
};

export default TestMainPannel;
