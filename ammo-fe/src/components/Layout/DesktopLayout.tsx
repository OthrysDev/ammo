import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Bar from 'components/bars/Bar';
import MainPannel from 'components/MainPannel';

const useStyles = makeStyles(() => ({
    fullWidth: {
        width: '100%',
    },
    fixedTop: {
        position: 'fixed',
        top: 0,
    },
    marginTop: {
        marginTop: '74px',
    },
}));

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

export default DesktopLayout;
