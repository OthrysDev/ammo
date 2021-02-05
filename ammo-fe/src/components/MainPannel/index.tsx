import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';
import 'simplebar/dist/simplebar.min.css';
import useMQ from 'hooks/useMQ';
import MobileMainPannel from 'components/MainPannel/MobileMainPannel';
import DesktopMainPannel from 'components/MainPannel/DesktopMainPannel';
// import TestMainPannel from 'components/MainPannel/TestMainPannel';

const MainPannel = (): ReactElement => {
    const { isSMDown } = useMQ();
    const bullets = useSelector((state: RootReducer) => state.bullets);

    return isSMDown ? (
        <MobileMainPannel bullets={bullets} />
    ) : (
        <DesktopMainPannel bullets={bullets} />
    );
};

// export default TestMainPannel;
export default MainPannel;
