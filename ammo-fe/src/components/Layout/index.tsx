import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Bar from 'components/bars/Bar';
import MobileBar from 'components/bars/MobileBar';
import MainPannel from 'components/MainPannel';
import useMQ from 'hooks/useMQ';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';
import ReconnectionToast from 'components/ReconnectionToast';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100%',
        overflowY: 'hidden',
    },
    grid: {
        height: '100%',
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    fixedTop: {
        position: 'fixed',
        top: 0,
    },
    fixedBottom: {
        position: 'fixed',
        bottom: 0,
    },
    marginTop: {
        marginTop: '74px',
    },
    marginBottom: {
        marginBottom: '74px',
    },
}));

// ==================================================================================================
// ===================================== RESPONSIVE LAYOUTS =========================================
// ==================================================================================================

const DesktopLayout = (): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Box className={`${classes.fullWidth} ${classes.fixedTop}`}>
                <Bar />
            </Box>

            <Box className={classes.marginTop}>
                <MainPannel />
            </Box>
        </>
    );
};

const MobileLayout = (): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Box className={`${classes.fullWidth} ${classes.fixedBottom}`}>
                <MobileBar />
            </Box>

            <Box className={classes.marginBottom}>
                <MainPannel />
            </Box>
        </>
    );
};

// ==================================================================================================
// ============================================ LAYOUT ==============================================
// ==================================================================================================

const Layout = (): ReactElement => {
    const classes = useStyles();
    const { isSMDown } = useMQ();
    const connected = useSelector((state: RootReducer) => state.ws.connected);

    return (
        <Box data-cy="layout-root" className={classes.root}>
            {!connected && <ReconnectionToast />}

            {isSMDown ? <MobileLayout /> : <DesktopLayout />}
        </Box>
    );
};

export default Layout;
