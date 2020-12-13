import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Bar from 'components/bars/Bar';
import MainPannel from 'components/MainPannel';

const useStyles = makeStyles(() => ({
    bar: {
        width: '100%',
        position: 'fixed',
        top: 0,
    },
    pannel: {
        marginTop: '74px',
    },
}));

const DesktopLayout = (): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.bar}>
                <Bar />
            </Box>

            <Box className={classes.pannel}>
                <MainPannel />
            </Box>
        </>
    );
};

export default DesktopLayout;
