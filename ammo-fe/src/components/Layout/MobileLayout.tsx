import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import MobileBar from 'components/bars/MobileBar';
import MainPannel from 'components/MainPannel';

const useStyles = makeStyles(() => ({
    fullWidth: {
        width: '100%',
    },
    fixedBottom: {
        position: 'fixed',
        bottom: 0,
    },
    marginBottom: {
        marginBottom: '74px',
    },
}));

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

export default MobileLayout;
