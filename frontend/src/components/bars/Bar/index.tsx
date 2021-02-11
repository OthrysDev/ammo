import React, { ReactElement } from 'react';
import Box from 'material/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecorderButton from 'components/buttons/RecorderButton';
import Palette from 'material/Palette';
import ResetButton from 'components/buttons/bar/ResetButton';

const useStyles = makeStyles(() => ({
    root: {
        height: '74px',
        width: '100%',
        backgroundColor: Palette.BLACK_LIGHT,
        zIndex: 9999,

        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        '& > *': {
            flex: '0 0 33.32%',
        },
    },
    button: {
        margin: '6px 6px',
    },
}));

const Bar = (): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.root} boxShadow={2}>
            <Box>
                <Box className={classes.button}>
                    <ResetButton />
                </Box>
            </Box>

            <RecorderButton />

            <Box></Box>
        </Box>
    );
};

export default Bar;
