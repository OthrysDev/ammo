import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import useMQ from 'hooks/useMQ';
import ReconnectionToast from 'components/ReconnectionToast';
import MobileLayout from 'components/Layout/MobileLayout';
import DesktopLayout from 'components/Layout/DesktopLayout';
import useWS from 'hooks/useWS';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'hidden',
    },
}));

const Layout = (): ReactElement => {
    const classes = useStyles();
    const { isSMDown } = useMQ();
    const { connected } = useWS();

    return (
        <Box data-cy="layout-root" className={classes.root}>
            {!connected && <ReconnectionToast />}

            {isSMDown ? <MobileLayout /> : <DesktopLayout />}
        </Box>
    );
};

export default Layout;
