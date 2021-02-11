import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Box from 'material/Box';
import ResetButton from 'components/buttons/bar/ResetButton';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        height: '50px',
        width: '100%',
        backgroundColor: Palette.BLACK_LIGHT,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    button: {
        margin: '6px 6px',
    },
}));

const MobileTopBar = (): ReactElement => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Box className={classes.button}>
                <ResetButton />
            </Box>
        </AppBar>
    );
};

export default MobileTopBar;
