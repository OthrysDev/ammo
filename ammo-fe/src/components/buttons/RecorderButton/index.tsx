import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecIcon from 'assets/icons/rec.svg';
import PauseIcon from 'assets/icons/pause.svg';
import useI18n from 'hooks/useI18n';
import { RootReducer } from 'redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import WS from 'network/WS';
import { UIReducerActionType } from 'redux/reducers/uiReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100px',
        height: '74px',
        backgroundColor: theme.palette.secondary.dark,
        overflow: 'hidden',
    },
    insideGutter: {
        height: '64px',
        width: '90px',
        margin: '5px auto',
        backgroundColor: theme.palette.primary.light,
        borderRadius: '3px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    insideButton: {
        height: '44px',
        width: '70px',
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
    const recording = useSelector((state: RootReducer) => state.ui.recording);

    const dispatch = useDispatch();
    const socket = WS.getSocket('http://localhost:3000');

    const toggleRecording = (): void => {
        socket.emit('toggleRecord', (isRecording: boolean) => {
            dispatch({
                type: UIReducerActionType.TOGGLE_RECORD,
                recording: isRecording,
            });
        });
    };

    return (
        <Box className={classes.root}>
            <Box
                className={`${classes.insideGutter} ${
                    connected ? '' : classes.disabled
                }`}
            >
                <Button
                    data-cy="recorder-button"
                    className={`${classes.insideButton} ${
                        connected ? classes.clickable : ''
                    }`}
                    onClick={toggleRecording}
                    disabled={!connected}
                >
                    {recording ? (
                        <img
                            data-cy="recording-button-pause"
                            src={PauseIcon}
                            alt={i18n('Img.Alt.PauseIcon')}
                            className={classes.icon}
                        />
                    ) : (
                        <img
                            data-cy="recording-button-record"
                            src={RecIcon}
                            alt={i18n('Img.Alt.RecordIcon')}
                            className={classes.icon}
                        />
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default RecorderButton;
