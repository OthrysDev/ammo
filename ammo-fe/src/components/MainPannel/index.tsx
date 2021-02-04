import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';
import 'simplebar/dist/simplebar.min.css';
import useMQ from 'hooks/useMQ';
import MobileMainPannel from 'components/MainPannel/MobileMainPannel';
import DesktopMainPannel from 'components/MainPannel/DesktopMainPannel';
// import {
//     bulletMock,
//     xmlBulletMock,
//     minimalBulletMock,
// } from 'shared/mocks/Bullet.mock';

// let i = 0;
// const mocks = [bulletMock, xmlBulletMock, minimalBulletMock];

const MainPannel = (): ReactElement => {
    const { isSMDown } = useMQ();
    const bullets = useSelector((state: RootReducer) => state.bullets);
    // const [bullets, setBullets] = useState([]);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setBullets((preBullets) => [
    //             ...preBullets,
    //             { ...mocks[i % 3], id: i },
    //         ]);

    //         i += 1;

    //         if (i >= 40) clearInterval(id);
    //     }, 300);
    // }, []);

    return isSMDown ? (
        <MobileMainPannel bullets={bullets} />
    ) : (
        <DesktopMainPannel bullets={bullets} />
    );
};

export default MainPannel;
