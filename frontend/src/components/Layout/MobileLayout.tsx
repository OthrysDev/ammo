import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import MobileBottomBar from 'components/bars/MobileBottomBar';
import MainPannel from 'components/MainPannel';
import MobileTopBar from 'components/bars/MobileTopBar';

const useStyles = makeStyles(() => ({
    bottomBar: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    pannel: {
        marginBottom: '74px',
    },
}));

const MobileLayout = (): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Box>
                <MobileTopBar />
            </Box>

            <Box className={classes.bottomBar}>
                <MobileBottomBar />
            </Box>

            <Box className={classes.pannel}>
                <MainPannel />
            </Box>
        </>
    );
};

export default MobileLayout;
