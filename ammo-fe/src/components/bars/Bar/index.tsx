import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecorderButton from 'components/buttons/RecorderButton';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '74px',
        width: '100%',
        backgroundColor: theme.palette.secondary.dark,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}));

const Bar = (): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.root} boxShadow={2} data-cy="bar">
            <RecorderButton />
        </Box>
    );
};

export default Bar;
