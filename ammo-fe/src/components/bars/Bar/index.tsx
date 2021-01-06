import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecorderButton from 'components/buttons/RecorderButton';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        height: '74px',
        width: '100%',
        backgroundColor: Palette.BLACK_LIGHT,
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
