import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import MobileBar from 'components/bars/MobileBar';
import MainPannel from 'components/MainPannel';

const useStyles = makeStyles(() => ({
    bar: {
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
            <Box className={classes.bar}>
                <MobileBar />
            </Box>

            <Box className={classes.pannel}>
                <MainPannel />
            </Box>
        </>
    );
};

export default MobileLayout;
