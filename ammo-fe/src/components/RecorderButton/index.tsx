import React, { ReactElement, useState } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecIcon from 'assets/rec.svg';
import PauseIcon from 'assets/pause.svg';
import useI18n from 'hooks/useI18n';
import { RootReducer } from 'redux/reducers';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100px',
        height: '74px',
        backgroundColor: theme.palette.secondary.dark,
        overflow: 'hidden',
        margin: '0 auto',
    },
    insideGutter: {
        height: '64px',
        width: '90px',
        margin: '5px auto',
        backgroundColor: theme.palette.primary.light,
        borderRadius: '3px',
        overflow: 'hidden',
    },
    insideButton: {
        height: '44px',
        width: '70px',
        margin: '10px auto',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '3px',
    },
    clickable: {
        '&:hover': {
            cursor: 'pointer',
            margin: '9px auto',
        },
    },
    icon: {
        display: 'block',
        margin: '0 auto',
        width: '44px',
        height: '44px',
        color: 'red',
    },
    disabled: {
        '& *': {
            filter: 'grayscale(.4)',
        },
    },
}));

const RecorderButton = (): ReactElement => {
    const classes = useStyles();
    const i18n = useI18n();
    const connected = useSelector((state: RootReducer) => state.ws.connected);
    const [recording, setRecording] = useState(false);

    const toggleRecording = (): void => {
        if (connected) setRecording((prevState) => !prevState);
    };

    return (
        <Box className={classes.root} data-cy="recorder-button">
            <Box
                className={`${classes.insideGutter} ${
                    connected ? '' : classes.disabled
                }`}
            >
                <Box
                    className={`${classes.insideButton} ${
                        connected ? classes.clickable : ''
                    }`}
                    boxShadow={2}
                    onClick={toggleRecording}
                >
                    {recording ? (
                        <img
                            data-cy={`recording-button-pause`}
                            src={PauseIcon}
                            alt={i18n('Img.Alt.PauseIcon')}
                            className={classes.icon}
                        />
                    ) : (
                        <img
                            data-cy={`recording-button-record`}
                            src={RecIcon}
                            alt={i18n('Img.Alt.RecordIcon')}
                            className={classes.icon}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default RecorderButton;
